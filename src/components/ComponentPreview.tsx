import { ReactNode } from "react";

interface ComponentPreviewProps {
  children: ReactNode;
  className?: string;
}

export function ComponentPreview({ children, className = "" }: ComponentPreviewProps) {
  return (
    <div className={`rounded-lg border border-border bg-card/50 p-8 flex items-center justify-center gap-4 flex-wrap ${className}`}>
      {children}
    </div>
  );
}
