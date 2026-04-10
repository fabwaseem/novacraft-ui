import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { Check, Minus } from "lucide-react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const checkboxVariants = cva(
  "peer shrink-0 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all",
  {
    variants: {
      variant: {
        default: "border border-primary data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground data-[state=indeterminate]:bg-primary data-[state=indeterminate]:text-primary-foreground",
        secondary: "border border-secondary data-[state=checked]:bg-secondary data-[state=checked]:text-secondary-foreground data-[state=indeterminate]:bg-secondary data-[state=indeterminate]:text-secondary-foreground",
        accent: "border border-accent data-[state=checked]:bg-accent data-[state=checked]:text-accent-foreground data-[state=indeterminate]:bg-accent data-[state=indeterminate]:text-accent-foreground",
        destructive: "border border-destructive data-[state=checked]:bg-destructive data-[state=checked]:text-destructive-foreground data-[state=indeterminate]:bg-destructive data-[state=indeterminate]:text-destructive-foreground",
        outline: "border-2 border-input data-[state=checked]:border-primary data-[state=checked]:text-primary data-[state=indeterminate]:border-primary data-[state=indeterminate]:text-primary",
        soft: "border border-primary/30 bg-primary/5 data-[state=checked]:bg-primary/20 data-[state=checked]:text-primary data-[state=checked]:border-primary/50",
        glow: "border border-primary data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground data-[state=checked]:shadow-[0_0_10px_hsl(var(--primary)/0.5)]",
      },
      size: {
        sm: "h-3.5 w-3.5 rounded-[3px] [&_svg]:h-3 [&_svg]:w-3",
        default: "h-4 w-4 rounded-sm [&_svg]:h-4 [&_svg]:w-4",
        lg: "h-5 w-5 rounded-md [&_svg]:h-4.5 [&_svg]:w-4.5",
        xl: "h-6 w-6 rounded-md [&_svg]:h-5 [&_svg]:w-5",
      },
      shape: {
        square: "",
        rounded: "!rounded-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      shape: "square",
    },
  }
);

export interface CheckboxProps
  extends React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>,
    VariantProps<typeof checkboxVariants> {}

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  CheckboxProps
>(({ className, variant, size, shape, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={cn(checkboxVariants({ variant, size, shape, className }))}
    {...props}
  >
    <CheckboxPrimitive.Indicator className={cn("flex items-center justify-center text-current")}>
      <Check className="h-4 w-4" />
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
));
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export { Checkbox, checkboxVariants };
