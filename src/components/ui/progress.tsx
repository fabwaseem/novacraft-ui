import * as React from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const progressVariants = cva("relative w-full overflow-hidden rounded-full", {
  variants: {
    variant: {
      default: "bg-secondary",
      muted: "bg-muted",
      outline: "bg-transparent border border-border",
    },
    size: {
      xs: "h-1",
      sm: "h-2",
      default: "h-3",
      lg: "h-4",
      xl: "h-5",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

const indicatorVariants = cva("h-full w-full flex-1 transition-all", {
  variants: {
    color: {
      primary: "bg-primary",
      secondary: "bg-secondary",
      accent: "bg-accent",
      destructive: "bg-destructive",
      gradient: "bg-gradient-to-r from-primary to-secondary",
      "gradient-accent": "bg-gradient-to-r from-primary to-accent",
      striped: "bg-primary bg-[length:1rem_1rem] bg-[linear-gradient(45deg,rgba(255,255,255,.15)_25%,transparent_25%,transparent_50%,rgba(255,255,255,.15)_50%,rgba(255,255,255,.15)_75%,transparent_75%,transparent)]",
      glow: "bg-primary shadow-[0_0_10px_hsl(var(--primary)/0.5)]",
    },
  },
  defaultVariants: {
    color: "primary",
  },
});

export interface ProgressProps
  extends React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>,
    VariantProps<typeof progressVariants> {
  indicatorColor?: VariantProps<typeof indicatorVariants>["color"];
}

const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  ProgressProps
>(({ className, value, variant, size, indicatorColor, ...props }, ref) => (
  <ProgressPrimitive.Root
    ref={ref}
    className={cn(progressVariants({ variant, size }), className)}
    {...props}
  >
    <ProgressPrimitive.Indicator
      className={cn(indicatorVariants({ color: indicatorColor }))}
      style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
    />
  </ProgressPrimitive.Root>
));
Progress.displayName = ProgressPrimitive.Root.displayName;

export { Progress, progressVariants };
