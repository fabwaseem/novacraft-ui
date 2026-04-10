import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const kbdVariants = cva(
  "pointer-events-none inline-flex select-none items-center gap-1 font-mono font-medium",
  {
    variants: {
      variant: {
        default: "border border-border bg-muted text-muted-foreground",
        outline: "border border-border text-foreground",
        ghost: "bg-muted/50 text-muted-foreground",
        filled: "bg-primary/10 text-primary border border-primary/20",
        "filled-secondary": "bg-secondary/10 text-secondary border border-secondary/20",
        dark: "bg-foreground text-background border-0",
      },
      size: {
        xs: "h-4 px-1 text-[9px] rounded-sm",
        sm: "h-5 px-1.5 text-[10px] rounded",
        default: "h-6 px-2 text-[11px] rounded-md",
        lg: "h-7 px-2.5 text-xs rounded-md",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "sm",
    },
  }
);

export interface KbdProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof kbdVariants> {}

export function Kbd({ className, variant, size, children, ...props }: KbdProps) {
  return (
    <kbd className={cn(kbdVariants({ variant, size }), className)} {...props}>
      {children}
    </kbd>
  );
}

export { kbdVariants };
