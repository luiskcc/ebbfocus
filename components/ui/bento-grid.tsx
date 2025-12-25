import { ArrowRightIcon } from "@radix-ui/react-icons";
import { ComponentPropsWithoutRef, ReactNode } from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface BentoGridProps extends ComponentPropsWithoutRef<"div"> {
  children: ReactNode;
  className?: string;
}

interface BentoCardProps extends ComponentPropsWithoutRef<"div"> {
  name: string;
  className: string;
  description: string;
  children?: ReactNode;
  background?: ReactNode;
  Icon?: any;
  href?: string;
  cta?: string;
}

const BentoGrid = ({ children, className, ...props }: BentoGridProps) => {
  return (
    <div
      className={cn(
        "grid w-full grid-cols-3 gap-4",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
};

const BentoCard = ({
  name,
  className,
  description,
  children,
  background,
  Icon,
  href,
  cta,
  ...props
}: BentoCardProps) => (
  <div
    className={cn(
      "group relative flex flex-col justify-end overflow-hidden rounded-xl h-full min-h-[300px]",
      "border bg-card/20 shadow-sm",
      className,
    )}
    {...props}
  >
    {/* Background */}
    {background}

    {/* Content */}
    <div className="relative z-10 m-2 rounded-lg bg-background/90 p-4 backdrop-blur-lg border border-border/50">
      <div className="pointer-events-none flex transform-gpu flex-col gap-1 transition-all duration-300">
        {Icon && (
          <div className="mb-2">
            <Icon className="w-6 h-6 text-primary" />
          </div>
        )}
        <h2 className="text-xl font-semibold text-card-foreground">
          {name}
        </h2>
        <p className="max-w-lg text-sm text-muted-foreground">{description}</p>
        {cta && (
          <p className="text-xs text-primary/80 mt-2">{cta}</p>
        )}
      </div>
    </div>

    {children}
  </div>
);

export { BentoCard, BentoGrid };
