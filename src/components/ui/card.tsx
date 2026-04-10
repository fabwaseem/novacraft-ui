import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const cardVariants = cva("rounded-lg text-card-foreground", {
  variants: {
    variant: {
      default: "border bg-card shadow-sm",
      elevated: "bg-card shadow-lg border-0",
      outline: "border-2 border-border bg-transparent",
      ghost: "bg-transparent border-0 shadow-none",
      glass: "bg-card/60 backdrop-blur-md border border-border/50",
      "glass-strong": "bg-card/80 backdrop-blur-xl border border-border/60",
      glow: "border border-primary/30 bg-card shadow-[0_0_20px_hsl(var(--primary)/0.15)]",
      "glow-secondary": "border border-secondary/30 bg-card shadow-[0_0_20px_hsl(var(--secondary)/0.15)]",
      "glow-accent": "border border-accent/30 bg-card shadow-[0_0_20px_hsl(var(--accent)/0.15)]",
      gradient: "border-0 bg-gradient-to-br from-card to-muted shadow-md",
      "gradient-border": "bg-card border-0 shadow-md ring-1 ring-inset ring-transparent [background-image:linear-gradient(hsl(var(--card)),hsl(var(--card))),linear-gradient(135deg,hsl(var(--primary)),hsl(var(--secondary)))] [background-origin:border-box] [background-clip:padding-box,border-box]",
      muted: "bg-muted/50 border border-border",
      interactive: "border bg-card shadow-sm hover:shadow-md hover:border-primary/30 transition-all cursor-pointer",
    },
    padding: {
      none: "",
      sm: "[&>*:first-child]:p-4 [&>*:first-child]:pb-2 [&>*:not(:first-child)]:px-4 [&>*:last-child]:pb-4",
      default: "",
      lg: "[&>*:first-child]:p-8 [&>*:first-child]:pb-3 [&>*:not(:first-child)]:px-8 [&>*:last-child]:pb-8",
    },
  },
  defaultVariants: {
    variant: "default",
    padding: "default",
  },
});

export interface CardProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof cardVariants> {}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant, padding, ...props }, ref) => (
    <div ref={ref} className={cn(cardVariants({ variant, padding }), className)} {...props} />
  )
);
Card.displayName = "Card";

const CardHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("flex flex-col space-y-1.5 p-6", className)} {...props} />
  ),
);
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h3 ref={ref} className={cn("text-2xl font-semibold leading-none tracking-tight", className)} {...props} />
  ),
);
CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <p ref={ref} className={cn("text-sm text-muted-foreground", className)} {...props} />
  ),
);
CardDescription.displayName = "CardDescription";

const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />,
);
CardContent.displayName = "CardContent";

const CardFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("flex items-center p-6 pt-0", className)} {...props} />
  ),
);
CardFooter.displayName = "CardFooter";

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent, cardVariants };
