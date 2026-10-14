import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { Loader2 } from "lucide-react";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:scale-[0.97]",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90 shadow-sm",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 shadow-sm",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        // NEW VARIANTS
        gradient: "bg-gradient-to-r from-primary to-secondary text-primary-foreground shadow-md hover:shadow-lg hover:brightness-110",
        soft: "bg-primary/10 text-primary hover:bg-primary/20 border border-primary/20",
        "soft-secondary": "bg-secondary/10 text-secondary hover:bg-secondary/20 border border-secondary/20",
        "soft-destructive": "bg-destructive/10 text-destructive hover:bg-destructive/20 border border-destructive/20",
        "soft-accent": "bg-accent/10 text-accent hover:bg-accent/20 border border-accent/20",
        glow: "bg-primary text-primary-foreground shadow-[0_0_20px_hsl(var(--primary)/0.4)] hover:shadow-[0_0_30px_hsl(var(--primary)/0.6)]",
        "glow-secondary": "bg-secondary text-secondary-foreground shadow-[0_0_20px_hsl(var(--secondary)/0.4)] hover:shadow-[0_0_30px_hsl(var(--secondary)/0.6)]",
        "glow-accent": "bg-accent text-accent-foreground shadow-[0_0_20px_hsl(var(--accent)/0.4)] hover:shadow-[0_0_30px_hsl(var(--accent)/0.6)]",
        "outline-glow": "border border-primary text-primary hover:bg-primary/10 shadow-[0_0_15px_hsl(var(--primary)/0.2)] hover:shadow-[0_0_25px_hsl(var(--primary)/0.4)]",
        glass: "glass text-foreground hover:bg-card/80",
        "glass-primary": "bg-primary/10 backdrop-blur-md border border-primary/30 text-primary hover:bg-primary/20",
        flat: "bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground",
      },
      size: {
        xs: "h-7 rounded-md px-2 text-xs [&_svg]:size-3",
        sm: "h-9 rounded-md px-3 text-sm [&_svg]:size-3.5",
        default: "h-10 rounded-md px-4 py-2 text-sm [&_svg]:size-4",
        lg: "h-11 rounded-md px-6 text-base [&_svg]:size-5",
        xl: "h-12 rounded-md px-8 text-base [&_svg]:size-5",
        "2xl": "h-14 rounded-lg px-10 text-lg [&_svg]:size-6",
        icon: "h-10 w-10 [&_svg]:size-4",
        "icon-sm": "h-8 w-8 [&_svg]:size-3.5",
        "icon-lg": "h-12 w-12 [&_svg]:size-5",
      },
      shape: {
        default: "",
        pill: "rounded-full",
        square: "rounded-none",
        rounded: "rounded-xl",
      },
      fullWidth: {
        true: "w-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      shape: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  loading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, shape, fullWidth, asChild = false, loading, leftIcon, rightIcon, children, disabled, type = "button", ...props }, ref) => {
    if (asChild) {
      return <Slot className={cn(buttonVariants({ variant, size, shape, fullWidth, className }))} ref={ref} {...props}>{children}</Slot>;
    }
    return (
      <button
        type={type}
        className={cn(buttonVariants({ variant, size, shape, fullWidth, className }))}
        ref={ref}
        disabled={disabled || loading}
        aria-busy={loading || undefined}
        {...props}
      >
        {loading && <Loader2 className="animate-spin" aria-hidden="true" />}
        {!loading && leftIcon}
        {children}
        {rightIcon}
      </button>
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
