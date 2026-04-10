import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const skeletonVariants = cva("rounded-md", {
  variants: {
    variant: {
      default: "animate-pulse bg-muted",
      shimmer: "relative overflow-hidden bg-muted before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-foreground/5 before:to-transparent",
      glow: "animate-pulse bg-muted shadow-[0_0_8px_hsl(var(--primary)/0.1)]",
      wave: "relative overflow-hidden bg-muted before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_1.5s_infinite] before:bg-gradient-to-r before:from-transparent before:via-primary/10 before:to-transparent",
    },
    shape: {
      default: "rounded-md",
      circle: "rounded-full",
      pill: "rounded-full",
      square: "rounded-none",
    },
  },
  defaultVariants: {
    variant: "default",
    shape: "default",
  },
});

export interface SkeletonProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof skeletonVariants> {}

function Skeleton({ className, variant, shape, ...props }: SkeletonProps) {
  return <div className={cn(skeletonVariants({ variant, shape }), className)} {...props} />;
}

export { Skeleton, skeletonVariants };
