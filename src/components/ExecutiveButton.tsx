import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, ReactNode } from "react";

interface ExecutiveButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'premium' | 'success' | 'urgent';
  size?: 'default' | 'lg' | 'xl';
  children: ReactNode;
}

export const ExecutiveButton = ({ 
  variant = 'primary', 
  size = 'default', 
  className, 
  children, 
  ...props 
}: ExecutiveButtonProps) => {
  const baseClasses = "inline-flex items-center justify-center rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const variants = {
    primary: "bg-primary text-primary-foreground shadow-[var(--shadow-executive)] hover:bg-primary-glow focus:ring-primary",
    premium: "bg-premium text-premium-foreground shadow-[var(--shadow-premium)] hover:bg-premium/90 focus:ring-premium",
    success: "bg-success text-success-foreground shadow-[var(--shadow-card)] hover:bg-success/90 focus:ring-success",
    urgent: "bg-urgent text-urgent-foreground shadow-[var(--shadow-card)] hover:bg-urgent/90 focus:ring-urgent animate-pulse"
  };
  
  const sizes = {
    default: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
    xl: "px-10 py-5 text-xl"
  };

  return (
    <button
      className={cn(
        baseClasses,
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};