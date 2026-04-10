import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const textareaVariants = cva(
  "flex w-full text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 transition-all resize-none",
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
      textareaSize: {
        sm: "min-h-[60px] rounded-md px-2.5 py-1.5 text-xs",
        default: "min-h-[80px] rounded-md px-3 py-2",
        lg: "min-h-[120px] rounded-md px-4 py-3 text-base",
        xl: "min-h-[160px] rounded-lg px-5 py-4 text-base",
      },
    },
    defaultVariants: {
      variant: "default",
      textareaSize: "default",
    },
  }
);

export interface TextareaProps
  extends Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, "size">,
    VariantProps<typeof textareaVariants> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, variant, textareaSize, ...props }, ref) => {
    return (
      <textarea
        className={cn(textareaVariants({ variant, textareaSize, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Textarea.displayName = "Textarea";

export { Textarea, textareaVariants };
