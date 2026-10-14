import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useThemeSync } from "@/hooks/use-theme";

export function ThemeToggle() {
  const { isLight, toggle } = useThemeSync();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggle}
      className="relative overflow-hidden"
      aria-pressed={isLight}
      aria-label={isLight ? "Switch to dark theme" : "Switch to light theme"}
    >
      {isLight ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
    </Button>
  );
}
