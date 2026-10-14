import { Link, useLocation } from "react-router-dom";
import { ThemeToggle } from "./ThemeToggle";
import { Zap } from "lucide-react";

export function Navbar() {
  const location = useLocation();

  const links = [
    { to: "/", label: "Home" },
    { to: "/components", label: "Components" },
    { to: "/blocks", label: "Blocks" },
    { to: "/templates", label: "Templates" },
    { to: "/themes", label: "Themes" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full glass-strong">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group" aria-label="NovaCraft home">
          <div className="h-8 w-8 rounded-lg bg-primary/20 flex items-center justify-center glow-primary group-hover:bg-primary/30 transition-colors">
            <Zap className="h-4 w-4 text-primary" />
          </div>
          <span className="text-lg font-bold tracking-tight">
            Nova<span className="text-primary">Craft</span>
          </span>
        </Link>

        <nav aria-label="Primary" className="flex items-center gap-1">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              aria-current={location.pathname === link.to ? "page" : undefined}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                location.pathname === link.to
                  ? "text-primary bg-primary/10"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
