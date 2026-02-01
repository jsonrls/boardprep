import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow-soft hover:shadow-glow hover:brightness-110 rounded-sm",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90 rounded-sm",
        outline:
          "border border-primary bg-transparent text-primary hover:bg-primary hover:text-primary-foreground rounded-sm",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/90 hover:brightness-110 rounded-sm",
        ghost:
          "text-foreground hover:bg-accent hover:text-accent-foreground rounded-full",
        link: "text-primary underline-offset-4 hover:underline",
        hero: "bg-gradient-primary rounded-full text-primary-foreground tracking-wide uppercase text-xs font-semibold shadow-lg hover:shadow-glow hover:brightness-110",
        heroOutline:
          "border border-accent bg-transparent text-primary tracking-wide uppercase text-xs font-semibold hover:bg-accent/50 hover:border-accent rounded-full",
        checkoutOutline:
          "border border-primary/40 bg-transparent text-primary tracking-wide uppercase text-xs font-semibold hover:bg-primary/10 hover:border-primary rounded-none",
        elegant:
          "bg-secondary text-secondary-foreground tracking-wide uppercase text-xs font-semibold hover:bg-secondary/90 rounded-none",
        elegantOutline:
          "border border-secondary bg-transparent text-secondary tracking-wide uppercase text-xs font-semibold hover:bg-secondary hover:text-secondary-foreground rounded-none",
      },
      size: {
        default: "h-11 px-6 py-2",
        sm: "h-9 px-4 text-xs",
        lg: "h-12 px-8 py-3",
        xl: "h-14 px-10 py-4",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
