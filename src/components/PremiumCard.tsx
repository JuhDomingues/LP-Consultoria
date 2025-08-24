import { ReactNode } from "react";

interface PremiumCardProps {
  title: string;
  children: ReactNode;
  highlight?: boolean;
  className?: string;
}

export const PremiumCard = ({ title, children, highlight, className = "" }: PremiumCardProps) => {
  return (
    <div 
      className={`
        relative p-6 rounded-xl border
        ${highlight 
          ? 'bg-card-premium border-premium shadow-[var(--shadow-premium)]' 
          : 'bg-card border-card-border shadow-[var(--shadow-card)]'
        }
        ${className}
      `}
    >
      {highlight && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <div className="bg-premium text-premium-foreground px-4 py-1 rounded-full text-sm font-semibold">
            💎 OFERTA ESPECIAL
          </div>
        </div>
      )}
      
      <h3 className="font-bold text-xl mb-4 text-foreground">
        {title}
      </h3>
      
      <div className="space-y-3">
        {children}
      </div>
    </div>
  );
};