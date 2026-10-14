import { useCallback, useEffect, useState } from "react";

const THEME_CHANGE_EVENT = "novacraft-theme-change";

const CSS_VARS = [
  "--primary", "--secondary", "--accent", "--background", "--card", "--muted",
  "--border", "--input", "--ring", "--foreground", "--card-foreground",
  "--popover", "--popover-foreground", "--muted-foreground", "--destructive",
  "--primary-foreground", "--secondary-foreground", "--accent-foreground",
  "--destructive-foreground", "--glow-primary", "--glow-secondary", "--glow-accent",
  "--sidebar-background", "--sidebar-foreground", "--sidebar-primary",
  "--sidebar-primary-foreground", "--sidebar-accent", "--sidebar-accent-foreground",
  "--sidebar-border", "--sidebar-ring",
];

export function dispatchThemeChange(isLight: boolean) {
  window.dispatchEvent(new CustomEvent(THEME_CHANGE_EVENT, { detail: { isLight } }));
}

/** Apply light/dark CSS variables based on the saved theme + isLight flag */
function applyModeToDOM(isLight: boolean) {
  const root = document.documentElement;
  root.classList.toggle("light", isLight);

  const saved = localStorage.getItem("novacraft-theme");
  if (!saved) {
    CSS_VARS.forEach((v) => root.style.removeProperty(v));
  }
}

export function useThemeSync() {
  const [isLight, setIsLight] = useState(() => {
    const saved = localStorage.getItem("novacraft-theme");
    if (saved) {
      try {
        return JSON.parse(saved).isLight ?? false;
      } catch {
        return false;
      }
    }
    return document.documentElement.classList.contains("light");
  });

  const toggle = useCallback(() => {
    const next = !isLight;
    setIsLight(next);

    const saved = localStorage.getItem("novacraft-theme");
    const theme = saved ? JSON.parse(saved) : {};
    localStorage.setItem("novacraft-theme", JSON.stringify({ ...theme, isLight: next }));

    applyModeToDOM(next);
    dispatchThemeChange(next);
  }, [isLight]);

  useEffect(() => {
    const handler = (event: Event) => {
      const detail = (event as CustomEvent<{ isLight: boolean }>).detail;
      setIsLight(detail.isLight);
    };
    window.addEventListener(THEME_CHANGE_EVENT, handler);
    return () => window.removeEventListener(THEME_CHANGE_EVENT, handler);
  }, []);

  useEffect(() => {
    applyModeToDOM(isLight);
  }, [isLight]);

  return { isLight, toggle };
}
