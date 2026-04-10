import * as React from "react";
import * as TogglePrimitive from "@radix-ui/react-toggle";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const toggleVariants = cva(
  "inline-flex items-center justify-center font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-transparent hover:bg-muted hover:text-muted-foreground data-[state=on]:bg-accent data-[state=on]:text-accent-foreground",
        outline: "border border-input bg-transparent hover:bg-accent hover:text-accent-foreground data-[state=on]:bg-accent data-[state=on]:text-accent-foreground",
        soft: "bg-transparent hover:bg-primary/10 data-[state=on]:bg-primary/15 data-[state=on]:text-primary",
        "soft-secondary": "bg-transparent hover:bg-secondary/10 data-[state=on]:bg-secondary/15 data-[state=on]:text-secondary",
        "soft-accent": "bg-transparent hover:bg-accent/10 data-[state=on]:bg-accent/15 data-[state=on]:text-accent",
        filled: "bg-transparent hover:bg-muted data-[state=on]:bg-primary data-[state=on]:text-primary-foreground",
        "filled-secondary": "bg-transparent hover:bg-muted data-[state=on]:bg-secondary data-[state=on]:text-secondary-foreground",
        glow: "bg-transparent hover:bg-primary/10 data-[state=on]:bg-primary/15 data-[state=on]:text-primary data-[state=on]:shadow-[0_0_10px_hsl(var(--primary)/0.3)]",
        ghost: "bg-transparent hover:bg-muted/50 data-[state=on]:text-foreground",
      },
      size: {
        xs: "h-7 px-1.5 text-xs rounded",
        sm: "h-9 px-2.5 text-sm rounded-md",
        default: "h-10 px-3 text-sm rounded-md",
        lg: "h-11 px-4 text-base rounded-md",
        xl: "h-12 px-5 text-base rounded-lg",
      },
      shape: {
        default: "",
        pill: "rounded-full",
        square: "rounded-none",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      shape: "default",
    },
  },
);

const Toggle = React.forwardRef<
  React.ElementRef<typeof TogglePrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof TogglePrimitive.Root> & VariantProps<typeof toggleVariants>
>(({ className, variant, size, shape, ...props }, ref) => (
  <TogglePrimitive.Root ref={ref} className={cn(toggleVariants({ variant, size, shape, className }))} {...props} />
));

Toggle.displayName = TogglePrimitive.Root.displayName;

export { Toggle, toggleVariants };
