import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive: "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-foreground border-border",
        // Soft
        soft: "border-primary/20 bg-primary/10 text-primary",
        "soft-secondary": "border-secondary/20 bg-secondary/10 text-secondary",
        "soft-destructive": "border-destructive/20 bg-destructive/10 text-destructive",
        "soft-accent": "border-accent/20 bg-accent/10 text-accent",
        "soft-muted": "border-border bg-muted text-muted-foreground",
        // Glow
        glow: "border-primary/30 bg-primary/10 text-primary shadow-[0_0_10px_hsl(var(--primary)/0.3)]",
        "glow-secondary": "border-secondary/30 bg-secondary/10 text-secondary shadow-[0_0_10px_hsl(var(--secondary)/0.3)]",
        "glow-accent": "border-accent/30 bg-accent/10 text-accent shadow-[0_0_10px_hsl(var(--accent)/0.3)]",
        // Gradient
        gradient: "border-transparent bg-gradient-to-r from-primary to-secondary text-primary-foreground",
        // Dot (uses ::before for colored dot)
        dot: "border-border bg-background text-foreground pl-5 before:absolute before:left-1.5 before:top-1/2 before:-translate-y-1/2 before:h-2 before:w-2 before:rounded-full before:bg-primary relative",
        "dot-success": "border-border bg-background text-foreground pl-5 before:absolute before:left-1.5 before:top-1/2 before:-translate-y-1/2 before:h-2 before:w-2 before:rounded-full before:bg-accent relative",
        "dot-warning": "border-border bg-background text-foreground pl-5 before:absolute before:left-1.5 before:top-1/2 before:-translate-y-1/2 before:h-2 before:w-2 before:rounded-full before:bg-[hsl(45,100%,50%)] relative",
        "dot-destructive": "border-border bg-background text-foreground pl-5 before:absolute before:left-1.5 before:top-1/2 before:-translate-y-1/2 before:h-2 before:w-2 before:rounded-full before:bg-destructive relative",
      },
      size: {
        sm: "px-1.5 py-0.5 text-[10px] rounded",
        default: "px-2.5 py-0.5 text-xs rounded-full",
        lg: "px-3 py-1 text-sm rounded-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, size, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant, size }), className)} {...props} />;
}

export { Badge, badgeVariants };
