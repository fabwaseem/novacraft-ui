import { useState, useEffect, useCallback } from "react";
import { Settings2, X, RotateCcw, Palette, Type, Square, Sun, Droplets, Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

/* ─── Preset Themes ─── */
const presetThemes = [
  {
    name: "Cyber Neon",
    colors: { primary: "185 100% 50%", secondary: "270 91% 65%", accent: "155 100% 50%", background: "240 6% 6%", card: "240 6% 9%", muted: "240 5% 14%", border: "240 5% 18%", foreground: "210 20% 92%", "muted-foreground": "215 15% 55%" },
  },
  {
    name: "Ocean Breeze",
    colors: { primary: "200 90% 50%", secondary: "220 80% 60%", accent: "170 70% 45%", background: "210 20% 6%", card: "210 18% 9%", muted: "210 15% 14%", border: "210 12% 20%", foreground: "200 20% 92%", "muted-foreground": "210 15% 55%" },
  },
  {
    name: "Sunset Ember",
    colors: { primary: "25 95% 55%", secondary: "350 80% 55%", accent: "45 90% 55%", background: "15 10% 6%", card: "15 8% 9%", muted: "15 6% 14%", border: "15 5% 20%", foreground: "30 20% 92%", "muted-foreground": "20 10% 55%" },
  },
  {
    name: "Forest Night",
    colors: { primary: "140 60% 45%", secondary: "95 50% 50%", accent: "170 50% 40%", background: "150 10% 5%", card: "150 8% 8%", muted: "150 6% 13%", border: "150 5% 18%", foreground: "140 15% 90%", "muted-foreground": "145 10% 50%" },
  },
  {
    name: "Royal Purple",
    colors: { primary: "280 80% 60%", secondary: "320 70% 55%", accent: "260 60% 65%", background: "270 15% 6%", card: "270 12% 9%", muted: "270 8% 14%", border: "270 6% 20%", foreground: "270 15% 92%", "muted-foreground": "270 10% 55%" },
  },
  {
    name: "Rose Gold",
    colors: { primary: "340 65% 60%", secondary: "15 50% 55%", accent: "30 60% 55%", background: "340 8% 6%", card: "340 6% 9%", muted: "340 5% 14%", border: "340 4% 20%", foreground: "340 10% 92%", "muted-foreground": "340 8% 55%" },
  },
  {
    name: "Monochrome",
    colors: { primary: "0 0% 85%", secondary: "0 0% 65%", accent: "0 0% 75%", background: "0 0% 4%", card: "0 0% 7%", muted: "0 0% 12%", border: "0 0% 18%", foreground: "0 0% 92%", "muted-foreground": "0 0% 50%" },
  },
  {
    name: "Arctic Blue",
    colors: { primary: "210 100% 60%", secondary: "190 80% 50%", accent: "230 70% 65%", background: "215 25% 5%", card: "215 20% 8%", muted: "215 15% 13%", border: "215 10% 20%", foreground: "210 20% 93%", "muted-foreground": "215 12% 55%" },
  },
];

const fontOptions = [
  { label: "Space Grotesk", value: "'Space Grotesk', sans-serif" },
  { label: "Inter", value: "'Inter', sans-serif" },
  { label: "System", value: "system-ui, sans-serif" },
  { label: "Mono", value: "'JetBrains Mono', monospace" },
  { label: "Serif", value: "Georgia, serif" },
];

const radiusOptions = [
  { label: "0", value: "0" },
  { label: "0.25", value: "0.25rem" },
  { label: "0.5", value: "0.5rem" },
  { label: "0.75", value: "0.75rem" },
  { label: "1.0", value: "1rem" },
  { label: "1.5", value: "1.5rem" },
];

const shadowIntensityOptions = [
  { label: "None", value: "none" },
  { label: "Subtle", value: "subtle" },
  { label: "Medium", value: "medium" },
  { label: "Strong", value: "strong" },
];

const borderWidthOptions = [
  { label: "0", value: "0px" },
  { label: "1px", value: "1px" },
  { label: "2px", value: "2px" },
  { label: "3px", value: "3px" },
];

const spacingOptions = [
  { label: "Compact", value: "0.85" },
  { label: "Default", value: "1" },
  { label: "Relaxed", value: "1.15" },
  { label: "Spacious", value: "1.3" },
];

const glowIntensityOptions = [
  { label: "Off", value: "0" },
  { label: "Low", value: "0.15" },
  { label: "Medium", value: "0.3" },
  { label: "High", value: "0.5" },
];

interface ThemeState {
  primary: string;
  secondary: string;
  accent: string;
  background: string;
  card: string;
  muted: string;
  border: string;
  foreground: string;
  "muted-foreground": string;
  radius: string;
  font: string;
  shadowIntensity: string;
  borderWidth: string;
  spacing: string;
  glowIntensity: string;
  isLight: boolean;
}

const defaults: ThemeState = {
  primary: "185 100% 50%",
  secondary: "270 91% 65%",
  accent: "155 100% 50%",
  background: "240 6% 6%",
  card: "240 6% 9%",
  muted: "240 5% 14%",
  border: "240 5% 18%",
  foreground: "210 20% 92%",
  "muted-foreground": "215 15% 55%",
  radius: "0.75rem",
  font: "'Space Grotesk', sans-serif",
  shadowIntensity: "medium",
  borderWidth: "1px",
  spacing: "1",
  glowIntensity: "0.3",
  isLight: false,
};

function OptionRow({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="space-y-2">
      <Label className="text-xs text-muted-foreground">{label}</Label>
      <div className="flex gap-1.5 flex-wrap">{children}</div>
    </div>
  );
}

function OptionButton({ active, onClick, children }: { active: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      onClick={onClick}
      className={`rounded-md py-1.5 px-2.5 text-xs font-medium transition-all border ${
        active
          ? "border-primary bg-primary/10 text-primary shadow-sm"
          : "border-border bg-muted/50 text-muted-foreground hover:text-foreground hover:border-muted-foreground/30"
      }`}
    >
      {children}
    </button>
  );
}

function ColorSwatch({ color, active, onClick, label }: { color: string; active: boolean; onClick: () => void; label: string }) {
  return (
    <button
      onClick={onClick}
      title={label}
      className={`h-7 w-7 rounded-full border-2 transition-all hover:scale-110 ${
        active ? "border-primary ring-2 ring-primary/30 scale-110" : "border-border"
      }`}
      style={{ background: `hsl(${color})` }}
    />
  );
}

const colorPickerPresets: Record<string, string[]> = {
  primary: [
    "185 100% 50%", "200 90% 50%", "210 100% 60%", "25 95% 55%", "350 80% 55%",
    "140 60% 45%", "280 80% 60%", "340 65% 60%", "0 0% 85%", "45 90% 55%",
    "160 80% 45%", "300 70% 55%", "30 80% 50%", "240 70% 60%",
  ],
  secondary: [
    "270 91% 65%", "220 80% 60%", "350 80% 55%", "95 50% 50%", "320 70% 55%",
    "15 50% 55%", "0 0% 65%", "190 80% 50%", "260 60% 65%", "30 60% 55%",
    "180 70% 45%", "300 60% 50%", "50 70% 50%", "210 80% 55%",
  ],
  accent: [
    "155 100% 50%", "170 70% 45%", "45 90% 55%", "170 50% 40%", "260 60% 65%",
    "30 60% 55%", "0 0% 75%", "230 70% 65%", "120 60% 45%", "340 60% 55%",
    "200 80% 50%", "80 60% 50%", "10 80% 55%", "280 50% 55%",
  ],
};

export function StyleConfigurator() {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [theme, setTheme] = useState<ThemeState>(() => {
    const saved = localStorage.getItem("novacraft-theme");
    return saved ? { ...defaults, ...JSON.parse(saved) } : defaults;
  });

  const update = useCallback((patch: Partial<ThemeState>) => {
    setTheme((prev) => {
      const next = { ...prev, ...patch };
      localStorage.setItem("novacraft-theme", JSON.stringify(next));
      return next;
    });
  }, []);

  // Apply all theme vars
  useEffect(() => {
    const root = document.documentElement;
    const vars: Record<string, string> = {
      "--primary": theme.primary,
      "--secondary": theme.secondary,
      "--accent": theme.accent,
      "--background": theme.background,
      "--card": theme.card,
      "--muted": theme.muted,
      "--border": theme.border,
      "--input": theme.border,
      "--ring": theme.primary,
      "--foreground": theme.foreground,
      "--card-foreground": theme.foreground,
      "--popover": theme.card,
      "--popover-foreground": theme.foreground,
      "--muted-foreground": theme["muted-foreground"],
      "--radius": theme.radius,
      "--glow-primary": theme.primary,
      "--glow-secondary": theme.secondary,
      "--glow-accent": theme.accent,
    };
    Object.entries(vars).forEach(([k, v]) => root.style.setProperty(k, v));

    // Font
    root.style.setProperty("font-family", theme.font);
    document.body.style.fontFamily = theme.font;

    // Spacing
    root.style.fontSize = `${parseFloat(theme.spacing) * 16}px`;

    // Shadow intensity custom prop
    root.style.setProperty("--shadow-intensity", theme.shadowIntensity);

    // Border width
    root.style.setProperty("--border-width", theme.borderWidth);

    // Glow intensity
    root.style.setProperty("--glow-intensity", theme.glowIntensity);

    // Light/dark
    root.classList.toggle("light", theme.isLight);

    return () => {
      root.style.fontSize = "";
    };
  }, [theme]);

  const resetAll = () => {
    setTheme(defaults);
    localStorage.removeItem("novacraft-theme");
    document.documentElement.classList.remove("light");
  };

  const exportCSS = () => {
    const css = `:root {
  --background: ${theme.background};
  --foreground: ${theme.foreground};
  --card: ${theme.card};
  --card-foreground: ${theme.foreground};
  --popover: ${theme.card};
  --popover-foreground: ${theme.foreground};
  --primary: ${theme.primary};
  --secondary: ${theme.secondary};
  --accent: ${theme.accent};
  --muted: ${theme.muted};
  --muted-foreground: ${theme["muted-foreground"]};
  --border: ${theme.border};
  --input: ${theme.border};
  --ring: ${theme.primary};
  --radius: ${theme.radius};
}`;
    navigator.clipboard.writeText(css);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <Button
        variant="outline"
        size="icon"
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-50 h-12 w-12 rounded-full shadow-lg glow-primary"
        aria-label="Style settings"
      >
        <Settings2 className="h-5 w-5" />
      </Button>

      {open && (
        <div className="fixed bottom-20 right-6 z-50 w-80 rounded-xl border border-border bg-card shadow-2xl animate-fade-in overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-border">
            <div className="flex items-center gap-2">
              <Palette className="h-4 w-4 text-primary" />
              <h3 className="text-sm font-semibold">Theme Studio</h3>
            </div>
            <div className="flex gap-1">
              <Button variant="ghost" size="icon-sm" onClick={exportCSS} aria-label="Export CSS">
                {copied ? <Check className="h-3.5 w-3.5 text-primary" /> : <Copy className="h-3.5 w-3.5" />}
              </Button>
              <Button variant="ghost" size="icon-sm" onClick={resetAll} aria-label="Reset theme">
                <RotateCcw className="h-3.5 w-3.5" />
              </Button>
              <Button variant="ghost" size="icon-sm" onClick={() => setOpen(false)} aria-label="Close theme studio">
                <X className="h-3.5 w-3.5" />
              </Button>
            </div>
          </div>

          <Tabs defaultValue="presets" className="w-full">
            <TabsList className="w-full rounded-none border-b border-border bg-transparent h-9">
              <TabsTrigger value="presets" className="text-xs flex-1 rounded-none data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:shadow-none">Presets</TabsTrigger>
              <TabsTrigger value="colors" className="text-xs flex-1 rounded-none data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:shadow-none">Colors</TabsTrigger>
              <TabsTrigger value="layout" className="text-xs flex-1 rounded-none data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:shadow-none">Layout</TabsTrigger>
              <TabsTrigger value="effects" className="text-xs flex-1 rounded-none data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:shadow-none">Effects</TabsTrigger>
            </TabsList>

            <ScrollArea className="h-[380px]">
              {/* PRESETS TAB */}
              <TabsContent value="presets" className="p-4 space-y-4 mt-0">
                <OptionRow label="Theme Presets">
                  <div className="grid grid-cols-2 gap-2 w-full">
                    {presetThemes.map((preset) => (
                      <button
                        key={preset.name}
                        onClick={() => update(preset.colors)}
                        className="flex items-center gap-2 p-2.5 rounded-lg border border-border hover:border-primary/50 transition-all text-left group"
                      >
                        <div className="flex -space-x-1">
                          <div className="h-4 w-4 rounded-full border border-background" style={{ background: `hsl(${preset.colors.primary})` }} />
                          <div className="h-4 w-4 rounded-full border border-background" style={{ background: `hsl(${preset.colors.secondary})` }} />
                          <div className="h-4 w-4 rounded-full border border-background" style={{ background: `hsl(${preset.colors.accent})` }} />
                        </div>
                        <span className="text-xs font-medium group-hover:text-primary transition-colors">{preset.name}</span>
                      </button>
                    ))}
                  </div>
                </OptionRow>

                <Separator />

                <OptionRow label="Mode">
                  <OptionButton active={!theme.isLight} onClick={() => update({ isLight: false })}>Dark</OptionButton>
                  <OptionButton active={theme.isLight} onClick={() => update({ isLight: true })}>Light</OptionButton>
                </OptionRow>
              </TabsContent>

              {/* COLORS TAB */}
              <TabsContent value="colors" className="p-4 space-y-5 mt-0">
                {(["primary", "secondary", "accent"] as const).map((colorKey) => (
                  <div key={colorKey} className="space-y-2">
                    <Label className="text-xs text-muted-foreground capitalize flex items-center gap-2">
                      <div className="h-3 w-3 rounded-full" style={{ background: `hsl(${theme[colorKey]})` }} />
                      {colorKey}
                    </Label>
                    <div className="flex gap-1.5 flex-wrap">
                      {colorPickerPresets[colorKey].map((color) => (
                        <ColorSwatch
                          key={color}
                          color={color}
                          active={theme[colorKey] === color}
                          onClick={() => update({ [colorKey]: color })}
                          label={color}
                        />
                      ))}
                    </div>
                  </div>
                ))}

                <Separator />

                <div className="space-y-2">
                  <Label className="text-xs text-muted-foreground">Background Darkness</Label>
                  <div className="flex gap-1.5 flex-wrap">
                    {[
                      { label: "Pitch", bg: "240 6% 3%", card: "240 6% 6%", muted: "240 5% 10%", border: "240 5% 14%" },
                      { label: "Dark", bg: "240 6% 6%", card: "240 6% 9%", muted: "240 5% 14%", border: "240 5% 18%" },
                      { label: "Medium", bg: "240 5% 10%", card: "240 5% 13%", muted: "240 4% 18%", border: "240 4% 22%" },
                      { label: "Soft", bg: "240 4% 14%", card: "240 4% 17%", muted: "240 3% 22%", border: "240 3% 26%" },
                    ].map((opt) => (
                      <OptionButton
                        key={opt.label}
                        active={theme.background === opt.bg}
                        onClick={() => update({ background: opt.bg, card: opt.card, muted: opt.muted, border: opt.border })}
                      >
                        {opt.label}
                      </OptionButton>
                    ))}
                  </div>
                </div>
              </TabsContent>

              {/* LAYOUT TAB */}
              <TabsContent value="layout" className="p-4 space-y-5 mt-0">
                <OptionRow label="Border Radius">
                  {radiusOptions.map((opt) => (
                    <OptionButton key={opt.value} active={theme.radius === opt.value} onClick={() => update({ radius: opt.value })}>
                      {opt.label}
                    </OptionButton>
                  ))}
                </OptionRow>

                <Separator />

                <OptionRow label="Font Family">
                  <div className="flex flex-col gap-1.5 w-full">
                    {fontOptions.map((opt) => (
                      <button
                        key={opt.value}
                        onClick={() => update({ font: opt.value })}
                        className={`w-full text-left px-3 py-2 rounded-md text-xs font-medium transition-all border ${
                          theme.font === opt.value
                            ? "border-primary bg-primary/10 text-primary"
                            : "border-border bg-muted/50 text-muted-foreground hover:text-foreground"
                        }`}
                        style={{ fontFamily: opt.value }}
                      >
                        {opt.label} — <span className="opacity-60">The quick brown fox</span>
                      </button>
                    ))}
                  </div>
                </OptionRow>

                <Separator />

                <OptionRow label="Spacing / Density">
                  {spacingOptions.map((opt) => (
                    <OptionButton key={opt.value} active={theme.spacing === opt.value} onClick={() => update({ spacing: opt.value })}>
                      {opt.label}
                    </OptionButton>
                  ))}
                </OptionRow>

                <Separator />

                <OptionRow label="Border Width">
                  {borderWidthOptions.map((opt) => (
                    <OptionButton key={opt.value} active={theme.borderWidth === opt.value} onClick={() => update({ borderWidth: opt.value })}>
                      {opt.label}
                    </OptionButton>
                  ))}
                </OptionRow>
              </TabsContent>

              {/* EFFECTS TAB */}
              <TabsContent value="effects" className="p-4 space-y-5 mt-0">
                <OptionRow label="Shadow Intensity">
                  {shadowIntensityOptions.map((opt) => (
                    <OptionButton key={opt.value} active={theme.shadowIntensity === opt.value} onClick={() => update({ shadowIntensity: opt.value })}>
                      {opt.label}
                    </OptionButton>
                  ))}
                </OptionRow>

                <Separator />

                <OptionRow label="Glow Intensity">
                  {glowIntensityOptions.map((opt) => (
                    <OptionButton key={opt.value} active={theme.glowIntensity === opt.value} onClick={() => update({ glowIntensity: opt.value })}>
                      {opt.label}
                    </OptionButton>
                  ))}
                </OptionRow>

                <Separator />

                {/* Live preview mini card */}
                <div className="space-y-2">
                  <Label className="text-xs text-muted-foreground">Preview</Label>
                  <div className="rounded-lg border border-border bg-card p-4 space-y-3">
                    <div className="flex items-center gap-2">
                      <div className="h-8 w-8 rounded-md bg-primary/20 flex items-center justify-center">
                        <Palette className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold">Sample Card</p>
                        <p className="text-xs text-muted-foreground">Preview your theme</p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <div className="h-6 rounded-md bg-primary px-2 flex items-center text-[10px] font-medium text-primary-foreground">Primary</div>
                      <div className="h-6 rounded-md bg-secondary px-2 flex items-center text-[10px] font-medium text-secondary-foreground">Secondary</div>
                      <div className="h-6 rounded-md bg-accent px-2 flex items-center text-[10px] font-medium text-accent-foreground">Accent</div>
                    </div>
                    <div className="h-2 rounded-full bg-muted overflow-hidden">
                      <div className="h-full w-2/3 rounded-full bg-gradient-to-r from-primary to-secondary" />
                    </div>
                  </div>
                </div>
              </TabsContent>
            </ScrollArea>
          </Tabs>
        </div>
      )}
    </>
  );
}
