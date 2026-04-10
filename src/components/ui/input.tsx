import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const inputVariants = cva(
  "flex w-full text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm transition-all",
  {
    variants: {
      variant: {
        default: "border border-input bg-background focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        filled: "border-0 bg-muted focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        ghost: "border-0 bg-transparent focus-visible:bg-muted",
        underline: "border-0 border-b-2 border-input bg-transparent rounded-none focus-visible:border-primary px-0",
        glow: "border border-primary/30 bg-background focus-visible:ring-2 focus-visible:ring-primary focus-visible:shadow-[0_0_15px_hsl(var(--primary)/0.3)]",
        glass: "border border-border/50 bg-card/60 backdrop-blur-sm focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      },
      inputSize: {
        sm: "h-8 rounded-md px-2.5 text-xs",
        default: "h-10 rounded-md px-3 py-2",
        lg: "h-12 rounded-md px-4 text-base",
        xl: "h-14 rounded-lg px-5 text-lg",
      },
    },
    defaultVariants: {
      variant: "default",
      inputSize: "default",
    },
  }
);

export interface InputProps
  extends Omit<React.ComponentProps<"input">, "size">,
    VariantProps<typeof inputVariants> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, variant, inputSize, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(inputVariants({ variant, inputSize, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Input.displayName = "Input";

export { Input, inputVariants };
