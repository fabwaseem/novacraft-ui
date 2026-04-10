import { useState, useRef, useCallback, ReactNode } from "react";
import { Monitor, Tablet, Smartphone, Code, Eye, Check, Copy, GripVertical } from "lucide-react";
import { Highlight, themes } from "prism-react-renderer";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type ViewMode = "preview" | "code";
type DeviceSize = "desktop" | "tablet" | "mobile";

const deviceWidths: Record<DeviceSize, number> = {
  desktop: 100,
  tablet: 768,
  mobile: 375,
};

const deviceIcons: Record<DeviceSize, typeof Monitor> = {
  desktop: Monitor,
  tablet: Tablet,
  mobile: Smartphone,
};

interface PreviewWrapperProps {
  title: string;
  description: string;
  code: string;
  children: ReactNode;
  defaultDevice?: DeviceSize;
}

export function PreviewWrapper({ title, description, code, children, defaultDevice = "desktop" }: PreviewWrapperProps) {
  const [mode, setMode] = useState<ViewMode>("preview");
  const [device, setDevice] = useState<DeviceSize>(defaultDevice);
  const [copied, setCopied] = useState(false);
  const [previewWidth, setPreviewWidth] = useState<number | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDragStart = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    setIsDragging(true);
    
    const container = containerRef.current;
    if (!container) return;
    
    const containerRect = container.getBoundingClientRect();
    const containerCenter = containerRect.left + containerRect.width / 2;

    const handleMouseMove = (ev: MouseEvent) => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      
      rafRef.current = requestAnimationFrame(() => {
        const distFromCenter = Math.abs(ev.clientX - containerCenter);
        const newWidth = Math.max(280, Math.min(distFromCenter * 2, containerRect.width - 24));
        setPreviewWidth(newWidth);
        setDevice("desktop");
      });
    };

    const handleMouseUp = () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      setIsDragging(false);
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  }, []);

  const handleDeviceClick = (d: DeviceSize) => {
    setDevice(d);
    setPreviewWidth(null);
  };

  const currentWidth = previewWidth
    ? previewWidth
    : device === "desktop"
    ? null
    : deviceWidths[device];

  const displayWidth = currentWidth ? `${Math.round(currentWidth)}px` : "100%";
  const isCustomSize = currentWidth !== null;

  return (
    <div className="space-y-3">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold text-foreground">{title}</h3>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
      </div>

      {/* Toolbar */}
      <div className="rounded-t-xl border border-b-0 border-border bg-card/50 px-3 py-2 flex items-center justify-between">
        {/* Left: View toggle */}
        <div className="flex items-center gap-0.5 p-0.5 rounded-lg bg-muted/50 border border-border">
          <button
            onClick={() => setMode("preview")}
            className={cn(
              "flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium transition-all",
              mode === "preview"
                ? "bg-background text-foreground shadow-sm"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            <Eye className="h-3.5 w-3.5" /> Preview
          </button>
          <button
            onClick={() => setMode("code")}
            className={cn(
              "flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium transition-all",
              mode === "code"
                ? "bg-background text-foreground shadow-sm"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            <Code className="h-3.5 w-3.5" /> Code
          </button>
        </div>

        {/* Center: Device toggle + width indicator */}
        {mode === "preview" && (
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-0.5 p-0.5 rounded-lg bg-muted/50 border border-border">
              {(["desktop", "tablet", "mobile"] as DeviceSize[]).map((d) => {
                const Icon = deviceIcons[d];
                return (
                  <button
                    key={d}
                    onClick={() => handleDeviceClick(d)}
                    className={cn(
                      "flex items-center gap-1.5 px-2.5 py-1.5 rounded-md text-xs font-medium transition-all",
                      device === d && !previewWidth
                        ? "bg-background text-foreground shadow-sm"
                        : "text-muted-foreground hover:text-foreground"
                    )}
                    title={d.charAt(0).toUpperCase() + d.slice(1)}
                  >
                    <Icon className="h-3.5 w-3.5" />
                    <span className="hidden sm:inline capitalize">{d}</span>
                  </button>
                );
              })}
            </div>
            <span className="text-[10px] font-mono text-muted-foreground bg-muted/50 px-2 py-1 rounded border border-border min-w-[60px] text-center">
              {displayWidth}
            </span>
          </div>
        )}

        {/* Right: Copy button */}
        <Button variant="ghost" size="sm" className="h-7 text-xs gap-1.5" onClick={handleCopy}>
          {copied ? <Check className="h-3 w-3 text-primary" /> : <Copy className="h-3 w-3" />}
          {copied ? "Copied!" : "Copy"}
        </Button>
      </div>

      {/* Content */}
      <div className="rounded-b-xl border border-border overflow-hidden -mt-3">
        {mode === "preview" ? (
          <div
            ref={containerRef}
            className={cn("bg-background p-4 min-h-[200px] relative", isDragging && "select-none cursor-col-resize")}
          >
            <div
              className={cn(
                "mx-auto overflow-hidden rounded-lg relative",
                isCustomSize && "border border-border shadow-lg"
              )}
              style={{ 
                width: currentWidth ? `${currentWidth}px` : "100%",
                maxWidth: "100%",
              }}
            >
              {/* Device frame header for custom sizes */}
              {isCustomSize && (
                <div className="bg-muted/50 border-b border-border px-3 py-1.5 flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <div className="h-2 w-2 rounded-full bg-destructive/60" />
                    <div className="h-2 w-2 rounded-full bg-yellow-500/60" />
                    <div className="h-2 w-2 rounded-full bg-primary/60" />
                  </div>
                  <div className="flex-1 mx-8">
                    <div className="h-4 rounded bg-muted/80 max-w-[120px] mx-auto" />
                  </div>
                  <span className="text-[9px] text-muted-foreground font-mono">{displayWidth}</span>
                </div>
              )}
              <div className="bg-card/30">{children}</div>

              {/* Right drag handle */}
              <div
                onMouseDown={handleDragStart}
                className="absolute top-0 -right-3 w-6 h-full flex items-center justify-center cursor-col-resize z-20 group"
              >
                <div className={cn(
                  "w-1.5 h-16 rounded-full transition-colors",
                  isDragging ? "bg-primary" : "bg-border group-hover:bg-primary/60"
                )} />
                <GripVertical className={cn(
                  "absolute h-4 w-4 transition-colors",
                  isDragging ? "text-primary" : "text-muted-foreground/50 group-hover:text-primary/60"
                )} />
              </div>

              {/* Left drag handle */}
              <div
                onMouseDown={handleDragStart}
                className="absolute top-0 -left-3 w-6 h-full flex items-center justify-center cursor-col-resize z-20 group"
              >
                <div className={cn(
                  "w-1.5 h-16 rounded-full transition-colors",
                  isDragging ? "bg-primary" : "bg-border group-hover:bg-primary/60"
                )} />
                <GripVertical className={cn(
                  "absolute h-4 w-4 transition-colors",
                  isDragging ? "text-primary" : "text-muted-foreground/50 group-hover:text-primary/60"
                )} />
              </div>
            </div>
          </div>
        ) : (
          /* Code view with prism-react-renderer */
          <div className="overflow-x-auto max-h-[500px] overflow-y-auto scrollbar-thin bg-[hsl(240,6%,7%)]">
            <Highlight theme={themes.nightOwl} code={code.trim()} language="tsx">
              {({ style, tokens, getLineProps, getTokenProps }) => (
                <pre className="p-4 text-xs font-mono" style={{ ...style, background: "transparent" }}>
                  {tokens.map((line, i) => {
                    const lineProps = getLineProps({ line });
                    return (
                      <div key={i} {...lineProps} className={cn(lineProps.className, "flex")}>
                        <span className="w-10 shrink-0 text-right pr-4 text-muted-foreground/40 select-none text-xs leading-6">
                          {i + 1}
                        </span>
                        <span className="leading-6">
                          {line.map((token, key) => (
                            <span key={key} {...getTokenProps({ token })} />
                          ))}
                        </span>
                      </div>
                    );
                  })}
                </pre>
              )}
            </Highlight>
          </div>
        )}
      </div>
    </div>
  );
}
