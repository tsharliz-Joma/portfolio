import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-all duration-200 ease-out transform focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:scale-[1.03] shadow-md",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground hover:bg-primary-foreground hover:text-primary",
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive-foreground hover:text-destructive",
        outline:
          "border border-input bg-transparent shadow-sm text-foreground hover:bg-foreground hover:text-background",
        secondary:
          "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary-foreground hover:text-secondary",
        ghost: "bg-transparent text-foreground hover:bg-foreground hover:text-background",
        link: "text-primary underline-offset-4 hover:text-background hover:bg-primary",
        neon: "", // handled via map
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  className?: string;
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link" | "neon";
  size?: "default" | "sm" | "lg" | "icon";
  neonColor?: "neonCyan" | "neonPink" | "neonLime" | "neonOrange" | "neonPurple" | "neonBlue";
}

const neonColorMap: Record<string, string> = {
  neonCyan: "bg-neonCyan text-onNeonDark hover:bg-onNeonDark hover:text-neonCyan",
  neonPink: "bg-neonPink text-onNeonDark hover:bg-onNeonDark hover:text-neonPink",
  neonLime: "bg-neonLime text-onNeonDark hover:bg-onNeonDark hover:text-neonLime",
  neonOrange: "bg-neonOrange text-onNeonLight hover:bg-onNeonLight hover:text-neonOrange",
  neonPurple: "bg-neonPurple text-onNeonLight hover:bg-onNeonLight hover:text-neonPurple",
  neonBlue: "bg-neonBlue text-onNeonDark hover:bg-onNeonDark hover:text-neonBlue",
};

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, neonColor, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";

    const neonClass = variant === "neon" && neonColor ? neonColorMap[neonColor] ?? "" : "";

    return (
      <Comp
        className={cn(buttonVariants({ variant, size }), neonClass, className)}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };
