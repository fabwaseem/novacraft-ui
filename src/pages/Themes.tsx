import { useState, useEffect, useCallback, useMemo, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Palette, Copy, Check, Shuffle, Lock, Unlock, RotateCcw, Download,
  Sun, Moon, Eye, Sparkles, Type, Layers,
  ChevronDown, ChevronRight, BarChart3, AlertTriangle, CheckCircle2,
  Info, Grid3X3, Settings2, Monitor, Wand2, Paintbrush, Zap,
  FileCode2, FileJson, History
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { CodeBlock } from "@/components/CodeBlock";
import { Checkbox } from "@/components/ui/checkbox";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { dispatchThemeChange } from "@/hooks/use-theme";

/* ─── Types ─── */
interface ColorToken {
  key: string;
  label: string;
  group: string;
  description?: string;
}

interface ThemeState {
  primary: string;
  "primary-foreground": string;
  secondary: string;
  "secondary-foreground": string;
  accent: string;
  "accent-foreground": string;
  destructive: string;
  "destructive-foreground": string;
  background: string;
  foreground: string;
  card: string;
  "card-foreground": string;
  popover: string;
  "popover-foreground": string;
  muted: string;
  "muted-foreground": string;
  border: string;
  input: string;
  ring: string;
  "sidebar-background": string;
  "sidebar-foreground": string;
  "sidebar-primary": string;
  "sidebar-primary-foreground": string;
  "sidebar-accent": string;
  "sidebar-accent-foreground": string;
  "sidebar-border": string;
  "sidebar-ring": string;
  warning: string;
  "warning-foreground": string;
  success: string;
  "success-foreground": string;
  info: string;
  "info-foreground": string;
  "chart-1": string;
  "chart-2": string;
  "chart-3": string;
  "chart-4": string;
  "chart-5": string;
  "glow-primary": string;
  "glow-secondary": string;
  "glow-accent": string;
  radius: string;
  font: string;
  shadowIntensity: string;
  borderWidth: string;
  spacing: string;
  glowIntensity: string;
  isLight: boolean;
}

type LockableKey = "primary" | "secondary" | "accent" | "background" | "foreground" | "destructive" | "radius" | "font" | "glowIntensity" | "shadowIntensity" | "sidebar" | "charts" | "status" | "surfaces";

function readThemeString(theme: ThemeState, key: string): string {
  const value = theme[key as keyof ThemeState];
  return typeof value === "string" ? value : "";
}

/* ─── Color token definitions ─── */
const colorTokenGroups: { group: string; icon: React.ReactNode; description: string; tokens: ColorToken[] }[] = [
  {
    group: "Brand", icon: <Palette className="h-3.5 w-3.5" />, description: "Core identity colors",
    tokens: [
      { key: "primary", label: "Primary", group: "Brand", description: "Main interactive color" },
      { key: "primary-foreground", label: "On Primary", group: "Brand", description: "Text over primary" },
      { key: "secondary", label: "Secondary", group: "Brand", description: "Supporting brand tone" },
      { key: "secondary-foreground", label: "On Secondary", group: "Brand", description: "Text over secondary" },
      { key: "accent", label: "Accent", group: "Brand", description: "Highlight & emphasis" },
      { key: "accent-foreground", label: "On Accent", group: "Brand", description: "Text over accent" },
    ],
  },
  {
    group: "Surfaces", icon: <Layers className="h-3.5 w-3.5" />, description: "Page & container layers",
    tokens: [
      { key: "background", label: "Background", group: "Surfaces" },
      { key: "foreground", label: "Foreground", group: "Surfaces" },
      { key: "card", label: "Card", group: "Surfaces" },
      { key: "card-foreground", label: "Card Text", group: "Surfaces" },
      { key: "popover", label: "Popover", group: "Surfaces" },
      { key: "popover-foreground", label: "Popover Text", group: "Surfaces" },
      { key: "muted", label: "Muted", group: "Surfaces" },
      { key: "muted-foreground", label: "Muted Text", group: "Surfaces" },
    ],
  },
  {
    group: "Chrome", icon: <Grid3X3 className="h-3.5 w-3.5" />, description: "Borders, inputs & focus rings",
    tokens: [
      { key: "border", label: "Border", group: "Chrome" },
      { key: "input", label: "Input Border", group: "Chrome" },
      { key: "ring", label: "Focus Ring", group: "Chrome" },
    ],
  },
  {
    group: "Feedback", icon: <AlertTriangle className="h-3.5 w-3.5" />, description: "Semantic status indicators",
    tokens: [
      { key: "destructive", label: "Destructive", group: "Feedback" },
      { key: "destructive-foreground", label: "On Destructive", group: "Feedback" },
      { key: "warning", label: "Warning", group: "Feedback" },
      { key: "warning-foreground", label: "On Warning", group: "Feedback" },
      { key: "success", label: "Success", group: "Feedback" },
      { key: "success-foreground", label: "On Success", group: "Feedback" },
      { key: "info", label: "Info", group: "Feedback" },
      { key: "info-foreground", label: "On Info", group: "Feedback" },
    ],
  },
  {
    group: "Data Viz", icon: <BarChart3 className="h-3.5 w-3.5" />, description: "Chart & graph palette",
    tokens: [
      { key: "chart-1", label: "Series 1", group: "Data Viz" },
      { key: "chart-2", label: "Series 2", group: "Data Viz" },
      { key: "chart-3", label: "Series 3", group: "Data Viz" },
      { key: "chart-4", label: "Series 4", group: "Data Viz" },
      { key: "chart-5", label: "Series 5", group: "Data Viz" },
    ],
  },
  {
    group: "Sidebar", icon: <Monitor className="h-3.5 w-3.5" />, description: "Navigation panel tokens",
    tokens: [
      { key: "sidebar-background", label: "Background", group: "Sidebar" },
      { key: "sidebar-foreground", label: "Text", group: "Sidebar" },
      { key: "sidebar-primary", label: "Active", group: "Sidebar" },
      { key: "sidebar-primary-foreground", label: "Active Text", group: "Sidebar" },
      { key: "sidebar-accent", label: "Hover", group: "Sidebar" },
      { key: "sidebar-accent-foreground", label: "Hover Text", group: "Sidebar" },
      { key: "sidebar-border", label: "Divider", group: "Sidebar" },
      { key: "sidebar-ring", label: "Focus", group: "Sidebar" },
    ],
  },
  {
    group: "Effects", icon: <Sparkles className="h-3.5 w-3.5" />, description: "Glow & luminance layers",
    tokens: [
      { key: "glow-primary", label: "Primary Glow", group: "Effects" },
      { key: "glow-secondary", label: "Secondary Glow", group: "Effects" },
      { key: "glow-accent", label: "Accent Glow", group: "Effects" },
    ],
  },
];

/* ─── Presets ─── */
const presetThemes: { name: string; emoji: string; description: string; colors: Partial<ThemeState> }[] = [
  { name: "Cyber Neon", emoji: "⚡", description: "Electric futurism", colors: { primary: "185 100% 50%", secondary: "270 91% 65%", accent: "155 100% 50%", background: "240 6% 6%", card: "240 6% 9%", muted: "240 5% 14%", border: "240 5% 18%", foreground: "210 20% 92%", "muted-foreground": "215 15% 55%", destructive: "0 72% 51%" } },
  { name: "Ocean Depths", emoji: "🌊", description: "Deep sea vibes", colors: { primary: "200 90% 50%", secondary: "220 80% 60%", accent: "170 70% 45%", background: "210 20% 6%", card: "210 18% 9%", muted: "210 15% 14%", border: "210 12% 20%", foreground: "200 20% 92%", "muted-foreground": "210 15% 55%", destructive: "0 72% 51%" } },
  { name: "Solar Flare", emoji: "🌅", description: "Warm & radiant", colors: { primary: "25 95% 55%", secondary: "350 80% 55%", accent: "45 90% 55%", background: "15 10% 6%", card: "15 8% 9%", muted: "15 6% 14%", border: "15 5% 20%", foreground: "30 20% 92%", "muted-foreground": "20 10% 55%", destructive: "0 72% 51%" } },
  { name: "Emerald Dark", emoji: "🌲", description: "Nature at night", colors: { primary: "140 60% 45%", secondary: "95 50% 50%", accent: "170 50% 40%", background: "150 10% 5%", card: "150 8% 8%", muted: "150 6% 13%", border: "150 5% 18%", foreground: "140 15% 90%", "muted-foreground": "145 10% 50%", destructive: "0 72% 51%" } },
  { name: "Amethyst", emoji: "👑", description: "Regal purple depth", colors: { primary: "280 80% 60%", secondary: "320 70% 55%", accent: "260 60% 65%", background: "270 15% 6%", card: "270 12% 9%", muted: "270 8% 14%", border: "270 6% 20%", foreground: "270 15% 92%", "muted-foreground": "270 10% 55%", destructive: "0 72% 51%" } },
  { name: "Blush", emoji: "🌸", description: "Soft rose tones", colors: { primary: "340 65% 60%", secondary: "15 50% 55%", accent: "30 60% 55%", background: "340 8% 6%", card: "340 6% 9%", muted: "340 5% 14%", border: "340 4% 20%", foreground: "340 10% 92%", "muted-foreground": "340 8% 55%", destructive: "0 72% 51%" } },
  { name: "Graphite", emoji: "🖤", description: "Pure monochrome", colors: { primary: "0 0% 85%", secondary: "0 0% 65%", accent: "0 0% 75%", background: "0 0% 4%", card: "0 0% 7%", muted: "0 0% 12%", border: "0 0% 18%", foreground: "0 0% 92%", "muted-foreground": "0 0% 50%", destructive: "0 72% 51%" } },
  { name: "Glacier", emoji: "❄️", description: "Arctic clarity", colors: { primary: "210 100% 60%", secondary: "190 80% 50%", accent: "230 70% 65%", background: "215 25% 5%", card: "215 20% 8%", muted: "215 15% 13%", border: "215 10% 20%", foreground: "210 20% 93%", "muted-foreground": "215 12% 55%", destructive: "0 72% 51%" } },
  { name: "Desert", emoji: "🏜️", description: "Warm earthen hues", colors: { primary: "35 80% 50%", secondary: "20 60% 45%", accent: "50 70% 50%", background: "30 10% 6%", card: "30 8% 9%", muted: "30 6% 14%", border: "30 5% 20%", foreground: "35 15% 90%", "muted-foreground": "30 10% 55%", destructive: "0 72% 51%" } },
  { name: "Spearmint", emoji: "🍃", description: "Cool & refreshing", colors: { primary: "160 80% 45%", secondary: "180 60% 50%", accent: "140 70% 50%", background: "160 12% 5%", card: "160 10% 8%", muted: "160 8% 13%", border: "160 6% 18%", foreground: "160 15% 92%", "muted-foreground": "160 10% 50%", destructive: "0 72% 51%" } },
];

const fontOptions = [
  { label: "Space Grotesk", value: "'Space Grotesk', sans-serif", desc: "Geometric & modern" },
  { label: "Inter", value: "'Inter', sans-serif", desc: "Clean UI workhorse" },
  { label: "System UI", value: "system-ui, sans-serif", desc: "Native OS typeface" },
  { label: "JetBrains Mono", value: "'JetBrains Mono', monospace", desc: "Developer terminal" },
  { label: "Georgia", value: "Georgia, serif", desc: "Classic editorial" },
];

const radiusOptions = [
  { label: "Sharp", value: "0", icon: "▢" },
  { label: "Subtle", value: "0.25rem", icon: "▢" },
  { label: "Soft", value: "0.5rem", icon: "▢" },
  { label: "Round", value: "0.75rem", icon: "▢" },
  { label: "Pill", value: "1rem", icon: "▢" },
  { label: "Full", value: "1.5rem", icon: "▢" },
];

const defaults: ThemeState = {
  primary: "185 100% 50%", "primary-foreground": "240 6% 6%",
  secondary: "270 91% 65%", "secondary-foreground": "0 0% 100%",
  accent: "155 100% 50%", "accent-foreground": "240 6% 6%",
  destructive: "0 72% 51%", "destructive-foreground": "210 40% 98%",
  background: "240 6% 6%", foreground: "210 20% 92%",
  card: "240 6% 9%", "card-foreground": "210 20% 92%",
  popover: "240 6% 9%", "popover-foreground": "210 20% 92%",
  muted: "240 5% 14%", "muted-foreground": "215 15% 55%",
  border: "240 5% 18%", input: "240 5% 18%", ring: "185 100% 50%",
  "sidebar-background": "240 6% 7%", "sidebar-foreground": "210 20% 92%",
  "sidebar-primary": "185 100% 50%", "sidebar-primary-foreground": "240 6% 6%",
  "sidebar-accent": "240 5% 14%", "sidebar-accent-foreground": "210 20% 92%",
  "sidebar-border": "240 5% 18%", "sidebar-ring": "185 100% 50%",
  warning: "38 92% 50%", "warning-foreground": "38 10% 10%",
  success: "142 72% 42%", "success-foreground": "142 10% 98%",
  info: "210 100% 52%", "info-foreground": "210 10% 98%",
  "chart-1": "185 100% 50%", "chart-2": "270 91% 65%", "chart-3": "155 100% 50%",
  "chart-4": "45 93% 58%", "chart-5": "0 72% 51%",
  "glow-primary": "185 100% 50%", "glow-secondary": "270 91% 65%", "glow-accent": "155 100% 50%",
  radius: "0.75rem", font: "'Space Grotesk', sans-serif",
  shadowIntensity: "medium", borderWidth: "1px", spacing: "1", glowIntensity: "0.3",
  isLight: false,
};

/* ─── HSL helpers ─── */
function parseHSL(hsl: string): [number, number, number] {
  const parts = hsl.split(/\s+/).map(s => parseFloat(s));
  return [parts[0] || 0, parts[1] || 0, parts[2] || 0];
}
function formatHSL(h: number, s: number, l: number): string {
  return `${Math.round(h)} ${Math.round(s)}% ${Math.round(l)}%`;
}
function randHue() { return Math.floor(Math.random() * 360); }
function randRange(min: number, max: number) { return Math.floor(min + Math.random() * (max - min)); }

function generateRandomTheme(locks: Set<LockableKey>, current: ThemeState): Partial<ThemeState> {
  const hue = randHue();
  const hue2 = (hue + 60 + Math.floor(Math.random() * 120)) % 360;
  const hue3 = (hue + 150 + Math.floor(Math.random() * 60)) % 360;
  const patch: Partial<ThemeState> = {};

  if (!locks.has("primary")) {
    const p = `${hue} ${randRange(70, 100)}% ${randRange(45, 60)}%`;
    patch.primary = p; patch["primary-foreground"] = formatHSL(hue, 6, 6);
    patch.ring = p; patch["glow-primary"] = p;
    if (!locks.has("sidebar")) {
      patch["sidebar-primary"] = p; patch["sidebar-primary-foreground"] = formatHSL(hue, 6, 6);
      patch["sidebar-ring"] = p;
    }
  }
  if (!locks.has("secondary")) {
    const s = `${hue2} ${randRange(60, 90)}% ${randRange(50, 65)}%`;
    patch.secondary = s; patch["secondary-foreground"] = "0 0% 100%"; patch["glow-secondary"] = s;
  }
  if (!locks.has("accent")) {
    const a = `${hue3} ${randRange(60, 100)}% ${randRange(40, 55)}%`;
    patch.accent = a; patch["accent-foreground"] = formatHSL(hue3, 6, 6); patch["glow-accent"] = a;
    if (!locks.has("sidebar")) {
      patch["sidebar-accent"] = formatHSL(hue, randRange(3, 6), randRange(12, 16));
      patch["sidebar-accent-foreground"] = formatHSL(hue, randRange(10, 20), randRange(88, 95));
    }
  }
  if (!locks.has("destructive")) {
    patch.destructive = `${randRange(350, 10)} 72% 51%`; patch["destructive-foreground"] = "210 40% 98%";
  }
  if (!locks.has("background") && !locks.has("surfaces")) {
    const bgLit = randRange(3, 8); const bgSat = randRange(4, 10);
    patch.background = `${hue} ${bgSat}% ${bgLit}%`;
    patch.foreground = `${hue} ${randRange(10, 20)}% ${randRange(88, 95)}%`;
    patch.card = `${hue} ${bgSat - 1}% ${bgLit + 3}%`;
    patch["card-foreground"] = patch.foreground;
    patch.popover = patch.card; patch["popover-foreground"] = patch.foreground;
    patch.muted = `${hue} ${randRange(3, 6)}% ${bgLit + 8}%`;
    patch["muted-foreground"] = `${hue} ${randRange(8, 15)}% ${randRange(48, 58)}%`;
    patch.border = `${hue} ${randRange(3, 6)}% ${bgLit + 12}%`; patch.input = patch.border;
    if (!locks.has("sidebar")) {
      patch["sidebar-background"] = `${hue} ${bgSat}% ${bgLit + 1}%`;
      patch["sidebar-foreground"] = patch.foreground; patch["sidebar-border"] = patch.border;
    }
  }
  if (!locks.has("status")) {
    patch.warning = `${randRange(30, 45)} 92% 50%`; patch["warning-foreground"] = `${randRange(30, 45)} 10% 10%`;
    patch.success = `${randRange(130, 155)} 72% 42%`; patch["success-foreground"] = `${randRange(130, 155)} 10% 98%`;
    patch.info = `${randRange(200, 220)} 100% 52%`; patch["info-foreground"] = `${randRange(200, 220)} 10% 98%`;
  }
  if (!locks.has("charts")) {
    patch["chart-1"] = patch.primary || current.primary;
    patch["chart-2"] = patch.secondary || current.secondary;
    patch["chart-3"] = patch.accent || current.accent;
    patch["chart-4"] = `${randRange(30, 55)} ${randRange(80, 95)}% ${randRange(50, 62)}%`;
    patch["chart-5"] = patch.destructive || current.destructive;
  }
  if (!locks.has("radius")) {
    patch.radius = ["0", "0.25rem", "0.5rem", "0.75rem", "1rem", "1.5rem"][Math.floor(Math.random() * 6)];
  }
  if (!locks.has("glowIntensity")) {
    patch.glowIntensity = ["0", "0.15", "0.3", "0.5"][Math.floor(Math.random() * 4)];
  }
  if (!locks.has("shadowIntensity")) {
    patch.shadowIntensity = ["none", "subtle", "medium", "strong"][Math.floor(Math.random() * 4)];
  }
  return patch;
}

function deriveLightColors(theme: ThemeState): Record<string, string> {
  const [pH, pS, pL] = parseHSL(theme.primary);
  const [sH, sS] = parseHSL(theme.secondary);
  const [aH, aS] = parseHSL(theme.accent);
  const [bH, bS] = parseHSL(theme.background);
  return {
    background: formatHSL(bH, Math.max(bS, 5), 98),
    foreground: formatHSL(bH, Math.min(bS + 2, 10), 10),
    card: formatHSL(bH, Math.max(bS, 3), 100),
    "card-foreground": formatHSL(bH, Math.min(bS + 2, 10), 10),
    popover: formatHSL(bH, Math.max(bS, 3), 100),
    "popover-foreground": formatHSL(bH, Math.min(bS + 2, 10), 10),
    muted: formatHSL(bH, Math.min(bS + 10, 20), 92),
    "muted-foreground": formatHSL(bH, Math.min(bS + 5, 15), 40),
    border: formatHSL(bH, Math.min(bS + 8, 18), 87),
    input: formatHSL(bH, Math.min(bS + 8, 18), 87),
    primary: formatHSL(pH, pS, Math.min(pL, 40)),
    "primary-foreground": "0 0% 100%",
    secondary: formatHSL(sH, sS * 0.8, Math.min(parseHSL(theme.secondary)[2], 50)),
    accent: formatHSL(aH, aS * 0.85, Math.min(parseHSL(theme.accent)[2], 38)),
    "accent-foreground": "0 0% 100%",
    "sidebar-background": formatHSL(bH, Math.max(bS, 4), 97),
    "sidebar-foreground": formatHSL(bH, Math.min(bS + 2, 10), 10),
    "sidebar-accent": formatHSL(bH, Math.min(bS + 10, 20), 92),
    "sidebar-accent-foreground": formatHSL(bH, Math.min(bS + 2, 10), 10),
    "sidebar-border": formatHSL(bH, Math.min(bS + 8, 18), 87),
  };
}

/* ─── Transition configs ─── */
const spring = { type: "spring" as const, stiffness: 500, damping: 30 };
const fadeSlide = { initial: { opacity: 0, y: 8 }, animate: { opacity: 1, y: 0 }, exit: { opacity: 0, y: -4 }, transition: { duration: 0.2 } };
const stagger = { animate: { transition: { staggerChildren: 0.04 } } };
const staggerItem = { initial: { opacity: 0, y: 6 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.15 } };

/* ─── Sub-components ─── */
function LockChip({ label, locked, onToggle }: { label: string; locked: boolean; onToggle: () => void }) {
  return (
    <motion.button
      type="button"
      onClick={onToggle}
      aria-pressed={locked}
      whileTap={{ scale: 0.95 }}
      className={`flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-medium border transition-all duration-200 ${
        locked
          ? "border-primary/50 bg-primary/15 text-primary shadow-[0_0_8px_hsl(var(--primary)/0.15)]"
          : "border-border/60 text-muted-foreground hover:text-foreground hover:border-border"
      }`}
    >
      <motion.div animate={{ rotate: locked ? 0 : 15 }} transition={spring}>
        {locked ? <Lock className="h-2.5 w-2.5" /> : <Unlock className="h-2.5 w-2.5" />}
      </motion.div>
      <span className="capitalize">{label}</span>
    </motion.button>
  );
}

function MiniColorSwatch({ value, onChange, label, description }: { value: string; label: string; description?: string; onChange: (v: string) => void }) {
  const [h, s, l] = parseHSL(value);
  const [expanded, setExpanded] = useState(false);

  return (
    <div>
      <button
        onClick={() => setExpanded(!expanded)}
        className={`flex items-center gap-2.5 w-full group rounded-lg px-2.5 py-2 transition-all duration-200 ${
          expanded ? "bg-muted/60" : "hover:bg-muted/30"
        }`}
      >
        <motion.div
          className="h-5 w-5 rounded-md border border-border/60 shadow-sm shrink-0"
          style={{ background: `hsl(${value})` }}
          whileHover={{ scale: 1.15 }}
          transition={spring}
        />
        <div className="flex-1 text-left min-w-0">
          <span className="text-xs font-medium text-foreground block leading-tight">{label}</span>
          {description && <span className="text-[9px] text-muted-foreground leading-tight">{description}</span>}
        </div>
        <code className="text-[9px] text-muted-foreground/70 font-mono hidden md:block tabular-nums">{value}</code>
        <motion.div animate={{ rotate: expanded ? 180 : 0 }} transition={{ duration: 0.2 }}>
          <ChevronDown className="h-3 w-3 text-muted-foreground/50" />
        </motion.div>
      </button>
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-3 pb-2.5 pt-1 space-y-2 ml-7">
              {[
                { label: "H", val: h, max: 360, suffix: "°", onChange: (v: number) => onChange(formatHSL(v, s, l)) },
                { label: "S", val: s, max: 100, suffix: "%", onChange: (v: number) => onChange(formatHSL(h, v, l)) },
                { label: "L", val: l, max: 100, suffix: "%", onChange: (v: number) => onChange(formatHSL(h, s, v)) },
              ].map(slider => (
                <div key={slider.label} className="flex items-center gap-2">
                  <span className="text-[9px] text-muted-foreground/60 w-2.5 font-mono font-medium">{slider.label}</span>
                  <Slider value={[slider.val]} max={slider.max} step={1} onValueChange={([v]) => slider.onChange(v)} className="flex-1" trackSize="sm" />
                  <span className="text-[9px] text-muted-foreground/60 w-8 text-right font-mono tabular-nums">{Math.round(slider.val)}{slider.suffix}</span>
                </div>
              ))}
              {/* Quick hue spectrum */}
              <div
                className="h-2 rounded-full mt-1 cursor-pointer"
                style={{ background: "linear-gradient(to right, hsl(0,100%,50%), hsl(60,100%,50%), hsl(120,100%,50%), hsl(180,100%,50%), hsl(240,100%,50%), hsl(300,100%,50%), hsl(360,100%,50%))" }}
                onClick={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  const x = (e.clientX - rect.left) / rect.width;
                  onChange(formatHSL(Math.round(x * 360), s, l));
                }}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function ColorGroupPanel({ group, icon, description, tokens, theme, update }: {
  group: string; icon: React.ReactNode; description: string; tokens: ColorToken[];
  theme: ThemeState; update: (patch: Partial<ThemeState>) => void;
}) {
  const [open, setOpen] = useState(group === "Brand");

  return (
    <motion.div
      layout
      className={`border rounded-xl overflow-hidden transition-colors duration-200 ${
        open ? "border-border bg-card/40" : "border-border/60 hover:border-border"
      }`}
    >
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2.5 w-full px-3.5 py-3 hover:bg-muted/20 transition-colors duration-150"
      >
        <div className={`p-1 rounded-md transition-colors duration-200 ${open ? "bg-primary/10 text-primary" : "text-muted-foreground"}`}>
          {icon}
        </div>
        <div className="flex-1 text-left">
          <span className="text-xs font-semibold block leading-tight">{group}</span>
          <span className="text-[9px] text-muted-foreground leading-tight">{description}</span>
        </div>
        <Badge variant="outline" className="text-[9px] h-5 px-1.5 font-mono border-border/40">{tokens.length}</Badge>
        <motion.div animate={{ rotate: open ? 90 : 0 }} transition={{ duration: 0.15 }}>
          <ChevronRight className="h-3.5 w-3.5 text-muted-foreground/50" />
        </motion.div>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-1.5 pb-2 space-y-0.5">
              {tokens.map(token => (
                <MiniColorSwatch
                  key={token.key}
                  label={token.label}
                  description={token.description}
                  value={readThemeString(theme, token.key) || "0 0% 50%"}
                  onChange={(v) => update({ [token.key]: v })}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

/* ─── Section label ─── */
function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[10px] uppercase tracking-[0.12em] text-muted-foreground/70 font-semibold mb-2 flex items-center gap-2">
      <span className="h-px flex-1 bg-border/50" />
      <span>{children}</span>
      <span className="h-px flex-1 bg-border/50" />
    </p>
  );
}

/* ─── Main Component ─── */
export default function Themes() {
  const [copied, setCopied] = useState<"css" | "json" | false>(false);
  const [locks, setLocks] = useState<Set<LockableKey>>(new Set());
  const [history, setHistory] = useState<ThemeState[]>([]);
  const [activePanel, setActivePanel] = useState<"colors" | "presets" | "layout" | "export">("colors");
  const [shuffleKey, setShuffleKey] = useState(0);
  const [theme, setTheme] = useState<ThemeState>(() => {
    const saved = localStorage.getItem("novacraft-theme");
    return saved ? { ...defaults, ...JSON.parse(saved) } : defaults;
  });

  const update = useCallback((patch: Partial<ThemeState>) => {
    setTheme(prev => {
      setHistory(h => [...h.slice(-29), prev]);
      const next = { ...prev, ...patch };
      localStorage.setItem("novacraft-theme", JSON.stringify(next));
      return next;
    });
  }, []);

  const toggleLock = useCallback((key: LockableKey) => {
    setLocks(prev => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key); else next.add(key);
      return next;
    });
  }, []);

  // Apply theme to DOM
  useEffect(() => {
    const root = document.documentElement;
    const lightColors = theme.isLight ? deriveLightColors(theme) : null;
    const get = (key: string, darkVal: string) => (lightColors && key in lightColors) ? lightColors[key] : darkVal;

    const allColorKeys = colorTokenGroups.flatMap(g => g.tokens.map(t => t.key));
    allColorKeys.forEach(key => {
      const val = get(key, readThemeString(theme, key) || "");
      if (val) root.style.setProperty(`--${key}`, val);
    });

    root.style.setProperty("--radius", theme.radius);
    root.style.setProperty("font-family", theme.font);
    document.body.style.fontFamily = theme.font;
    root.style.fontSize = `${parseFloat(theme.spacing) * 16}px`;
    root.style.setProperty("--shadow-intensity", theme.shadowIntensity);
    root.style.setProperty("--border-width", theme.borderWidth);
    root.style.setProperty("--glow-intensity", theme.glowIntensity);
    root.classList.toggle("light", theme.isLight);
    dispatchThemeChange(theme.isLight);

    return () => { root.style.fontSize = ""; };
  }, [theme]);

  useEffect(() => {
    const handler = (e: Event) => {
      const detail = (e as CustomEvent).detail;
      if (detail.isLight !== theme.isLight) {
        setTheme(prev => {
          const next = { ...prev, isLight: detail.isLight };
          localStorage.setItem("novacraft-theme", JSON.stringify(next));
          return next;
        });
      }
    };
    window.addEventListener("novacraft-theme-change", handler);
    return () => window.removeEventListener("novacraft-theme-change", handler);
  }, [theme.isLight]);

  const randomize = () => {
    update(generateRandomTheme(locks, theme));
    setShuffleKey(k => k + 1);
  };

  const undo = () => {
    if (!history.length) return;
    const prev = history[history.length - 1];
    setHistory(h => h.slice(0, -1));
    setTheme(prev);
    localStorage.setItem("novacraft-theme", JSON.stringify(prev));
  };

  const resetAll = () => {
    setTheme(defaults);
    localStorage.removeItem("novacraft-theme");
    document.documentElement.classList.remove("light");
    setLocks(new Set());
  };

  const allCSSVars = useMemo(() => {
    const lines = colorTokenGroups.flatMap(g =>
      g.tokens.map(t => `  --${t.key}: ${readThemeString(theme, t.key)};`)
    );
    lines.push(`  --radius: ${theme.radius};`);
    return `:root {\n${lines.join("\n")}\n}`;
  }, [theme]);

  const copyToClipboard = (text: string, type: "css" | "json") => {
    navigator.clipboard.writeText(text);
    setCopied(type);
    setTimeout(() => setCopied(false), 2000);
  };

  const totalTokens = colorTokenGroups.reduce((a, g) => a + g.tokens.length, 0);

  const panels = [
    { id: "colors" as const, label: "Colors", icon: <Paintbrush className="h-3.5 w-3.5" />, count: totalTokens },
    { id: "presets" as const, label: "Presets", icon: <Wand2 className="h-3.5 w-3.5" />, count: presetThemes.length },
    { id: "layout" as const, label: "Style", icon: <Settings2 className="h-3.5 w-3.5" /> },
    { id: "export" as const, label: "Export", icon: <Download className="h-3.5 w-3.5" /> },
  ];

  return (
    <main id="main-content" className="min-h-screen flex flex-col">
      {/* ─── Command bar ─── */}
      <div className="sticky top-16 z-30 border-b border-border/60 bg-background/60 backdrop-blur-2xl">
        <div className="flex items-center justify-between px-3 lg:px-5 h-11">
          {/* Panel tabs */}
          <div role="tablist" aria-label="Theme panels" className="flex items-center gap-0.5 bg-muted/40 rounded-lg p-0.5">
            {panels.map(p => (
              <motion.button
                key={p.id}
                type="button"
                role="tab"
                aria-selected={activePanel === p.id}
                aria-label={p.label}
                onClick={() => setActivePanel(p.id)}
                whileTap={{ scale: 0.97 }}
                className={`relative flex items-center gap-1.5 px-3 py-1.5 rounded-md text-[11px] font-medium transition-colors duration-150 ${
                  activePanel === p.id ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {activePanel === p.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-card border border-border/60 rounded-md shadow-sm"
                    transition={{ type: "spring", stiffness: 400, damping: 28 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-1.5">
                  {p.icon}
                  <span className="hidden sm:inline">{p.label}</span>
                  {p.count && <span className="text-[9px] text-muted-foreground/60 font-mono">{p.count}</span>}
                </span>
              </motion.button>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-1.5">
            <AnimatePresence>
              {locks.size > 0 && (
                <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.8 }}>
                  <Badge variant="outline" className="gap-1 border-primary/30 text-[10px] h-6 bg-primary/5">
                    <Lock className="h-2.5 w-2.5" /> {locks.size} locked
                  </Badge>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Mode toggle */}
            <div className="flex items-center gap-1.5 bg-muted/40 rounded-lg px-2 py-1 border border-border/30">
              <Moon className={`h-3 w-3 transition-colors duration-200 ${!theme.isLight ? "text-primary" : "text-muted-foreground/40"}`} />
              <Switch checked={theme.isLight} onCheckedChange={v => update({ isLight: v })} className="scale-[0.65]" aria-label="Light mode" />
              <Sun className={`h-3 w-3 transition-colors duration-200 ${theme.isLight ? "text-primary" : "text-muted-foreground/40"}`} />
            </div>

            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon-sm" onClick={undo} disabled={!history.length} className="text-muted-foreground" aria-label="Undo theme change">
                  <History className="h-3.5 w-3.5" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>Undo ({history.length})</TooltipContent>
            </Tooltip>

            <Button variant="ghost" size="xs" onClick={resetAll} className="text-muted-foreground hover:text-destructive">
              <RotateCcw className="h-3 w-3 mr-1" /> Reset
            </Button>

            <motion.div whileTap={{ scale: 0.95 }}>
              <Button variant="glow" size="xs" onClick={randomize} className="gap-1.5 font-semibold">
                <motion.div
                  key={shuffleKey}
                  animate={{ rotate: [0, 180, 360] }}
                  transition={{ duration: 0.4 }}
                >
                  <Shuffle className="h-3.5 w-3.5" />
                </motion.div>
                Shuffle
              </Button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ─── Content ─── */}
      <div className="flex-1 flex min-h-0">
        {/* Left panel */}
        <div className="w-full lg:w-[400px] xl:w-[440px] border-r border-border/40 overflow-y-auto h-[calc(100vh-6.75rem)] scrollbar-thin">
          <AnimatePresence mode="wait">
            <motion.div key={activePanel} {...fadeSlide} className="p-4 space-y-3">

              {/* ═══ COLORS ═══ */}
              {activePanel === "colors" && (
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <h2 className="text-sm font-bold tracking-tight">Design Tokens</h2>
                      <p className="text-[10px] text-muted-foreground mt-0.5">{totalTokens} CSS custom properties</p>
                    </div>
                  </div>

                  {/* Lock bar */}
                  <div className="space-y-1.5">
                    <p className="text-[9px] text-muted-foreground/60 uppercase tracking-widest font-semibold">Shuffle locks</p>
                    <div className="flex flex-wrap gap-1">
                      {(["primary", "secondary", "accent", "destructive", "surfaces", "sidebar", "charts", "status"] as LockableKey[]).map(k => (
                        <LockChip key={k} label={k} locked={locks.has(k)} onToggle={() => toggleLock(k)} />
                      ))}
                    </div>
                  </div>

                  <Separator className="opacity-40" />

                  <motion.div {...stagger} className="space-y-2">
                    {colorTokenGroups.map(g => (
                      <motion.div key={g.group} {...staggerItem}>
                        <ColorGroupPanel
                          group={g.group}
                          icon={g.icon}
                          description={g.description}
                          tokens={g.tokens}
                          theme={theme}
                          update={update}
                        />
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              )}

              {/* ═══ PRESETS ═══ */}
              {activePanel === "presets" && (
                <div className="space-y-4">
                  <div>
                    <h2 className="text-sm font-bold tracking-tight">Curated Palettes</h2>
                    <p className="text-[10px] text-muted-foreground mt-0.5">One click to transform your entire design system</p>
                  </div>
                  <motion.div {...stagger} className="grid grid-cols-1 gap-2">
                    {presetThemes.map(preset => (
                      <motion.button
                        key={preset.name}
                        {...staggerItem}
                        whileHover={{ scale: 1.01 }}
                        whileTap={{ scale: 0.99 }}
                        onClick={() => update(preset.colors)}
                        className="group flex items-center gap-3 p-3 rounded-xl border border-border/50 bg-card/30 hover:bg-card/60 hover:border-primary/30 transition-all duration-200 text-left"
                      >
                        <div className="flex -space-x-1.5 shrink-0">
                          {[preset.colors.primary, preset.colors.secondary, preset.colors.accent].map((c, i) => (
                            <motion.div
                              key={i}
                              className="h-7 w-7 rounded-full border-2 border-card shadow-sm"
                              style={{ background: `hsl(${c})` }}
                              whileHover={{ scale: 1.2, zIndex: 10 }}
                            />
                          ))}
                        </div>
                        <div className="flex-1 min-w-0">
                          <span className="text-xs font-semibold group-hover:text-primary transition-colors duration-200">
                            {preset.emoji} {preset.name}
                          </span>
                          <span className="text-[10px] text-muted-foreground block">{preset.description}</span>
                        </div>
                        <ChevronRight className="h-3.5 w-3.5 text-muted-foreground/30 group-hover:text-primary/60 transition-colors" />
                      </motion.button>
                    ))}
                  </motion.div>
                </div>
              )}

              {/* ═══ STYLE ═══ */}
              {activePanel === "layout" && (
                <div className="space-y-5">
                  <div>
                    <h2 className="text-sm font-bold tracking-tight">Style & Layout</h2>
                    <p className="text-[10px] text-muted-foreground mt-0.5">Fine-tune the personality of your design system</p>
                  </div>

                  {/* Border radius */}
                  <div>
                    <div className="flex items-center justify-between mb-2.5">
                      <Label className="text-xs font-semibold">Corner Radius</Label>
                      <LockChip label="radius" locked={locks.has("radius")} onToggle={() => toggleLock("radius")} />
                    </div>
                    <div className="grid grid-cols-6 gap-1.5">
                      {radiusOptions.map(opt => (
                        <motion.button
                          key={opt.value}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => update({ radius: opt.value })}
                          className={`flex flex-col items-center gap-1.5 p-2.5 border transition-all duration-200 ${
                            theme.radius === opt.value
                              ? "border-primary bg-primary/10 shadow-[0_0_10px_hsl(var(--primary)/0.1)]"
                              : "border-border/50 bg-card/30 hover:border-border"
                          }`}
                          style={{ borderRadius: opt.value }}
                        >
                          <div className="h-6 w-6 bg-primary/20 border border-primary/30" style={{ borderRadius: opt.value }} />
                          <span className="text-[9px] text-muted-foreground font-medium">{opt.label}</span>
                        </motion.button>
                      ))}
                    </div>
                  </div>

                  <Separator className="opacity-40" />

                  {/* Font */}
                  <div>
                    <Label className="text-xs font-semibold mb-2.5 block">Typeface</Label>
                    <div className="space-y-1">
                      {fontOptions.map(opt => (
                        <motion.button
                          key={opt.value}
                          whileTap={{ scale: 0.99 }}
                          onClick={() => update({ font: opt.value })}
                          className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg border transition-all duration-200 ${
                            theme.font === opt.value
                              ? "border-primary bg-primary/10 shadow-[0_0_10px_hsl(var(--primary)/0.1)]"
                              : "border-border/40 hover:border-border bg-card/20"
                          }`}
                          style={{ fontFamily: opt.value }}
                        >
                          <span className="text-sm font-medium">{opt.label}</span>
                          <span className="text-[10px] text-muted-foreground">{opt.desc}</span>
                        </motion.button>
                      ))}
                    </div>
                  </div>

                  <Separator className="opacity-40" />

                  {/* Effect controls */}
                  {[
                    { title: "Glow Intensity", key: "glowIntensity" as const, lockKey: "glowIntensity" as LockableKey, options: [{ l: "Off", v: "0" }, { l: "Low", v: "0.15" }, { l: "Medium", v: "0.3" }, { l: "High", v: "0.5" }] },
                    { title: "Shadow Depth", key: "shadowIntensity" as const, lockKey: "shadowIntensity" as LockableKey, options: [{ l: "None", v: "none" }, { l: "Subtle", v: "subtle" }, { l: "Medium", v: "medium" }, { l: "Strong", v: "strong" }] },
                    { title: "Content Density", key: "spacing" as const, options: [{ l: "Compact", v: "0.85" }, { l: "Default", v: "1" }, { l: "Relaxed", v: "1.15" }, { l: "Spacious", v: "1.3" }] },
                  ].map(control => (
                    <div key={control.title}>
                      <div className="flex items-center justify-between mb-2">
                        <Label className="text-xs font-semibold">{control.title}</Label>
                        {control.lockKey && <LockChip label={control.lockKey} locked={locks.has(control.lockKey)} onToggle={() => toggleLock(control.lockKey)} />}
                      </div>
                      <div className="flex gap-1">
                        {control.options.map(o => (
                          <motion.button
                            key={o.v}
                            whileTap={{ scale: 0.97 }}
                            onClick={() => update({ [control.key]: o.v })}
                            className={`flex-1 py-2 rounded-lg text-[11px] font-medium border transition-all duration-200 ${
                              theme[control.key] === o.v
                                ? "border-primary bg-primary/10 text-primary shadow-[0_0_8px_hsl(var(--primary)/0.1)]"
                                : "border-border/40 text-muted-foreground hover:text-foreground hover:border-border"
                            }`}
                          >
                            {o.l}
                          </motion.button>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* ═══ EXPORT ═══ */}
              {activePanel === "export" && (
                <div className="space-y-4">
                  <div>
                    <h2 className="text-sm font-bold tracking-tight">Export Your Theme</h2>
                    <p className="text-[10px] text-muted-foreground mt-0.5">Copy production-ready code for your project</p>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      variant={copied === "css" ? "default" : "soft"}
                      size="sm"
                      onClick={() => copyToClipboard(allCSSVars, "css")}
                      leftIcon={copied === "css" ? <Check className="h-3.5 w-3.5" /> : <FileCode2 className="h-3.5 w-3.5" />}
                      className="flex-1"
                    >
                      {copied === "css" ? "Copied!" : "Copy CSS"}
                    </Button>
                    <Button
                      variant={copied === "json" ? "default" : "soft-secondary"}
                      size="sm"
                      onClick={() => copyToClipboard(JSON.stringify(theme, null, 2), "json")}
                      leftIcon={copied === "json" ? <Check className="h-3.5 w-3.5" /> : <FileJson className="h-3.5 w-3.5" />}
                      className="flex-1"
                    >
                      {copied === "json" ? "Copied!" : "Copy JSON"}
                    </Button>
                  </div>
                  <CodeBlock code={allCSSVars} language="css" />
                </div>
              )}

            </motion.div>
          </AnimatePresence>
        </div>

        {/* ─── Right panel: Live Preview ─── */}
        <div className="hidden lg:flex flex-1 flex-col overflow-y-auto h-[calc(100vh-6.75rem)] scrollbar-thin bg-background">
          <motion.div
            key={shuffleKey}
            initial={{ opacity: 0.7 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="p-8 xl:p-12 space-y-10 max-w-4xl mx-auto w-full"
          >
            {/* Header */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="h-7 w-7 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Eye className="h-3.5 w-3.5 text-primary" />
                </div>
                <div>
                  <h2 className="text-sm font-bold tracking-tight">Live Preview</h2>
                  <p className="text-[10px] text-muted-foreground">Updates in real-time as you customize</p>
                </div>
              </div>
              <Badge variant="outline" className="text-[9px] font-mono border-border/40">
                {theme.isLight ? "Light" : "Dark"} mode
              </Badge>
            </div>

            {/* Palette strip */}
            <div className="space-y-3">
              <SectionLabel>Full Palette</SectionLabel>
              <div className="flex rounded-xl overflow-hidden h-12 shadow-sm border border-border/30">
                {["primary", "secondary", "accent", "destructive", "warning", "success", "info", "muted"].map(key => (
                  <Tooltip key={key}>
                    <TooltipTrigger asChild>
                      <motion.div
                        role="img"
                        aria-label={`${key} color`}
                        className="flex-1 cursor-pointer transition-all duration-300"
                        whileHover={{ flex: 2.5 }}
                        style={{ background: `hsl(${readThemeString(theme, key)})` }}
                      />
                    </TooltipTrigger>
                    <TooltipContent side="bottom" className="text-xs capitalize font-medium">{key}</TooltipContent>
                  </Tooltip>
                ))}
              </div>
            </div>

            {/* Chart data viz */}
            <div className="space-y-3">
              <SectionLabel>Data Visualization</SectionLabel>
              <div className="flex gap-3 items-end">
                {[1, 2, 3, 4, 5].map(i => {
                  const heights = [70, 100, 55, 85, 45];
                  return (
                    <motion.div
                      key={`${i}-${shuffleKey}`}
                      initial={{ height: 0 }}
                      animate={{ height: heights[i - 1] }}
                      transition={{ delay: i * 0.05, type: "spring", stiffness: 300, damping: 20 }}
                      className="flex-1 rounded-t-md border border-border/20"
                      style={{ background: `hsl(${readThemeString(theme, `chart-${i}`)})` }}
                    />
                  );
                })}
              </div>
              <div className="flex gap-3">
                {[1, 2, 3, 4, 5].map(i => (
                  <span key={i} className="flex-1 text-center text-[9px] text-muted-foreground font-mono">chart-{i}</span>
                ))}
              </div>
            </div>

            {/* Buttons */}
            <div className="space-y-3">
              <SectionLabel>Interactive Elements</SectionLabel>
              <div className="flex gap-2 flex-wrap">
                {[
                  { label: "Primary", variant: "default" as const },
                  { label: "Secondary", variant: "secondary" as const },
                  { label: "Outline", variant: "outline" as const },
                  { label: "Destructive", variant: "destructive" as const },
                  { label: "Ghost", variant: "ghost" as const },
                  { label: "Glow", variant: "glow" as const },
                  { label: "Gradient", variant: "gradient" as const },
                  { label: "Soft", variant: "soft" as const },
                  { label: "Glass", variant: "glass" as const },
                ].map(btn => (
                  <motion.div key={btn.label} whileHover={{ y: -1 }} whileTap={{ scale: 0.97 }}>
                    <Button size="sm" variant={btn.variant}>{btn.label}</Button>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Badges */}
            <div className="space-y-3">
              <SectionLabel>Status & Feedback</SectionLabel>
              <div className="flex gap-2 flex-wrap">
                <Badge className="bg-primary/10 text-primary border-primary/20">Primary</Badge>
                <Badge className="bg-secondary/10 text-secondary border-secondary/20">Secondary</Badge>
                <Badge className="bg-accent/10 text-accent border-accent/20">Accent</Badge>
                <Badge className="bg-destructive/10 text-destructive border-destructive/20">Error</Badge>
                <Badge className="bg-warning/10 text-warning border-warning/20">Warning</Badge>
                <Badge className="bg-success/10 text-success border-success/20">Success</Badge>
                <Badge className="bg-info/10 text-info border-info/20">Info</Badge>
              </div>

              <div className="grid grid-cols-3 gap-3 mt-3">
                {[
                  { icon: AlertTriangle, label: "Caution required", color: "warning" },
                  { icon: CheckCircle2, label: "Changes saved", color: "success" },
                  { icon: Info, label: "New update", color: "info" },
                ].map(item => (
                  <motion.div
                    key={item.color}
                    whileHover={{ y: -2 }}
                    className={`rounded-xl border bg-${item.color}/5 border-${item.color}/20 p-3.5 flex items-center gap-2.5 transition-shadow hover:shadow-md`}
                  >
                    <item.icon className={`h-4 w-4 text-${item.color} shrink-0`} />
                    <span className="text-xs font-medium">{item.label}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Form controls */}
            <div className="space-y-3">
              <SectionLabel>Form Controls</SectionLabel>
              <div className="grid grid-cols-2 gap-3">
                <Input placeholder="Type something..." />
                <Input variant="glow" placeholder="With glow focus..." />
              </div>
              <div className="space-y-3">
                <Slider defaultValue={[65]} />
                <Progress value={70} className="h-2" />
                <div className="flex gap-4 items-center">
                  <div className="flex items-center gap-2">
                    <Switch defaultChecked />
                    <Label className="text-xs">Active</Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <Checkbox defaultChecked />
                    <Label className="text-xs">Selected</Label>
                  </div>
                </div>
              </div>
            </div>

            {/* Cards */}
            <div className="space-y-3">
              <SectionLabel>Card Components</SectionLabel>
              <div className="grid grid-cols-2 gap-4">
                <motion.div whileHover={{ y: -3 }} transition={{ duration: 0.2 }}>
                  <Card className="overflow-hidden">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm flex items-center gap-2">
                        <Zap className="h-3.5 w-3.5 text-primary" />
                        Solid Card
                      </CardTitle>
                      <CardDescription className="text-[11px]">Default surface with border</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center gap-2">
                        <div className="h-8 w-8 rounded-lg bg-primary/15 flex items-center justify-center">
                          <Sparkles className="h-4 w-4 text-primary" />
                        </div>
                        <div>
                          <p className="text-xs font-semibold">Interactive widget</p>
                          <p className="text-[10px] text-muted-foreground">Using your tokens</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div whileHover={{ y: -3 }} transition={{ duration: 0.2 }}>
                  <Card className="glass overflow-hidden">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm flex items-center gap-2">
                        <Layers className="h-3.5 w-3.5 text-secondary" />
                        Glass Card
                      </CardTitle>
                      <CardDescription className="text-[11px]">Frosted glass variant</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center gap-2">
                        <div className="h-8 w-8 rounded-lg bg-secondary/15 flex items-center justify-center">
                          <Layers className="h-4 w-4 text-secondary" />
                        </div>
                        <div>
                          <p className="text-xs font-semibold">Layered depth</p>
                          <p className="text-[10px] text-muted-foreground">With backdrop blur</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </div>

            {/* Glow */}
            {parseFloat(theme.glowIntensity) > 0 && (
              <div className="space-y-3">
                <SectionLabel>Glow Effects</SectionLabel>
                <div className="flex gap-6 justify-center py-6">
                  {[
                    { color: theme.primary, cls: "glow-primary" },
                    { color: theme.secondary, cls: "glow-secondary" },
                    { color: theme.accent, cls: "glow-accent" },
                  ].map((g, i) => (
                    <motion.div
                      key={i}
                      className={`h-14 w-14 rounded-full ${g.cls}`}
                      style={{ background: `hsl(${g.color})` }}
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Typography */}
            <div className="space-y-3">
              <SectionLabel>Typography Scale</SectionLabel>
              <div className="space-y-2 bg-card/40 rounded-xl border border-border/30 p-5">
                <h1 className="text-2xl font-bold tracking-tight">
                  The quick brown fox
                </h1>
                <h2 className="text-lg font-semibold text-muted-foreground">
                  Jumps over the lazy dog — <span className="text-primary">highlighted</span>
                </h2>
                <p className="text-sm leading-relaxed">
                  Body text with{" "}
                  <span className="font-semibold text-foreground">strong emphasis</span>{" "}
                  and <span className="text-primary">primary links</span> demonstrates
                  readability across your chosen typeface and color tokens.
                </p>
                <p className="text-xs text-muted-foreground">
                  Caption · {fontOptions.find(f => f.value === theme.font)?.label || "Custom"} · {theme.isLight ? "Light" : "Dark"} mode
                </p>
              </div>
            </div>

            {/* Surface stack */}
            <div className="space-y-3">
              <SectionLabel>Surface Elevation</SectionLabel>
              <div className="space-y-1.5">
                {[
                  { label: "Background", var: "background", desc: "Base layer" },
                  { label: "Card", var: "card", desc: "Elevated surface" },
                  { label: "Muted", var: "muted", desc: "Subdued fills" },
                  { label: "Border", var: "border", desc: "Dividers & edges" },
                ].map(s => (
                  <div key={s.var} className="flex items-center gap-3 group">
                    <div
                      className="h-8 w-24 rounded-md border border-border/30 shadow-sm transition-transform group-hover:scale-105"
                      style={{ background: `hsl(${readThemeString(theme, s.var)})` }}
                    />
                    <div className="flex-1">
                      <span className="text-xs font-medium">{s.label}</span>
                      <span className="text-[9px] text-muted-foreground block">{s.desc}</span>
                    </div>
                    <code className="text-[9px] font-mono text-muted-foreground/50 tabular-nums">{readThemeString(theme, s.var)}</code>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
