import { Moon, Sun } from "lucide-react";
import { useEffect, useState, useCallback } from "react";
import { Button } from "@/components/ui/button";

// Global event for theme sync
const THEME_CHANGE_EVENT = "novacraft-theme-change";

export function dispatchThemeChange(isLight: boolean) {
  window.dispatchEvent(new CustomEvent(THEME_CHANGE_EVENT, { detail: { isLight } }));
}

/** Apply light/dark CSS variables based on the saved theme + isLight flag */
function applyModeToDOM(isLight: boolean) {
  const root = document.documentElement;
  root.classList.toggle("light", isLight);

  // If we're on the themes page, the Themes component handles CSS vars.
  // Otherwise, we need to clear inline overrides so the CSS class takes effect,
  // OR apply the saved theme's derived light colors.
  const saved = localStorage.getItem("novacraft-theme");
  if (!saved) {
    // No custom theme - just clear all inline styles so index.css :root / .light classes work
    const cssVars = [
      "--primary", "--secondary", "--accent", "--background", "--card", "--muted",
      "--border", "--input", "--ring", "--foreground", "--card-foreground",
      "--popover", "--popover-foreground", "--muted-foreground", "--destructive",
      "--primary-foreground", "--secondary-foreground", "--accent-foreground",
      "--destructive-foreground", "--glow-primary", "--glow-secondary", "--glow-accent",
      "--sidebar-background", "--sidebar-foreground", "--sidebar-primary",
      "--sidebar-primary-foreground", "--sidebar-accent", "--sidebar-accent-foreground",
      "--sidebar-border", "--sidebar-ring",
    ];
    cssVars.forEach(v => root.style.removeProperty(v));
    return;
  }

  // If there's a saved custom theme, the Themes page effect will re-apply on next render.
  // For pages other than /themes, we need to trigger a re-apply.
  // Dispatch event so Themes component picks it up if mounted.
}

export function useThemeSync() {
  const [isLight, setIsLight] = useState(() => {
    const saved = localStorage.getItem("novacraft-theme");
    if (saved) {
      try {
        return JSON.parse(saved).isLight ?? false;
      } catch { return false; }
    }
    return document.documentElement.classList.contains("light");
  });

  const toggle = useCallback(() => {
    const next = !isLight;
    setIsLight(next);
    
    // Sync to localStorage
    const saved = localStorage.getItem("novacraft-theme");
    const theme = saved ? JSON.parse(saved) : {};
    localStorage.setItem("novacraft-theme", JSON.stringify({ ...theme, isLight: next }));
    
    applyModeToDOM(next);
    
    // Dispatch event for other components (Themes page will re-apply full vars)
    dispatchThemeChange(next);
  }, [isLight]);

  useEffect(() => {
    const handler = (e: Event) => {
      const detail = (e as CustomEvent).detail;
      setIsLight(detail.isLight);
      applyModeToDOM(detail.isLight);
    };
    window.addEventListener(THEME_CHANGE_EVENT, handler);
    
    // Initial sync
    applyModeToDOM(isLight);
    
    return () => window.removeEventListener(THEME_CHANGE_EVENT, handler);
  }, []);

  return { isLight, toggle };
}

export function ThemeToggle() {
  const { isLight, toggle } = useThemeSync();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggle}
      className="relative overflow-hidden"
    >
      {isLight ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
