import * as React from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const sliderTrackVariants = cva("relative w-full grow overflow-hidden rounded-full", {
  variants: {
    variant: {
      default: "bg-secondary",
      muted: "bg-muted",
      outline: "bg-transparent border border-border",
    },
    trackSize: {
      sm: "h-1",
      default: "h-2",
      lg: "h-3",
      xl: "h-4",
    },
  },
  defaultVariants: { variant: "default", trackSize: "default" },
});

const sliderRangeVariants = cva("absolute h-full", {
  variants: {
    color: {
      primary: "bg-primary",
      secondary: "bg-secondary",
      accent: "bg-accent",
      destructive: "bg-destructive",
      gradient: "bg-gradient-to-r from-primary to-secondary",
      "gradient-accent": "bg-gradient-to-r from-primary to-accent",
      glow: "bg-primary shadow-[0_0_8px_hsl(var(--primary)/0.5)]",
    },
  },
  defaultVariants: { color: "primary" },
});

const sliderThumbVariants = cva(
  "block rounded-full border-2 bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      thumbColor: {
        primary: "border-primary",
        secondary: "border-secondary",
        accent: "border-accent",
        destructive: "border-destructive",
        filled: "border-primary bg-primary",
        glow: "border-primary shadow-[0_0_8px_hsl(var(--primary)/0.6)]",
      },
      thumbSize: {
        sm: "h-3.5 w-3.5",
        default: "h-5 w-5",
        lg: "h-6 w-6",
        xl: "h-7 w-7",
      },
    },
    defaultVariants: { thumbColor: "primary", thumbSize: "default" },
  }
);

export interface SliderProps
  extends React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>,
    VariantProps<typeof sliderTrackVariants> {
  color?: VariantProps<typeof sliderRangeVariants>["color"];
  thumbColor?: VariantProps<typeof sliderThumbVariants>["thumbColor"];
  thumbSize?: VariantProps<typeof sliderThumbVariants>["thumbSize"];
}

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  SliderProps
>(({ className, variant, trackSize, color, thumbColor, thumbSize, ...props }, ref) => (
  <SliderPrimitive.Root
    ref={ref}
    className={cn("relative flex w-full touch-none select-none items-center", className)}
    {...props}
  >
    <SliderPrimitive.Track className={cn(sliderTrackVariants({ variant, trackSize }))}>
      <SliderPrimitive.Range className={cn(sliderRangeVariants({ color }))} />
    </SliderPrimitive.Track>
    <SliderPrimitive.Thumb className={cn(sliderThumbVariants({ thumbColor, thumbSize }))} />
  </SliderPrimitive.Root>
));
Slider.displayName = SliderPrimitive.Root.displayName;

export { Slider };
