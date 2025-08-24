interface FeatureListProps {
  items: string[];
  icon?: string;
  className?: string;
}

export const FeatureList = ({ items, icon = "✓", className = "" }: FeatureListProps) => {
  return (
    <ul className={`space-y-2 ${className}`}>
      {items.map((item, index) => (
        <li key={index} className="flex items-start gap-3">
          <span className="text-success text-lg flex-shrink-0 mt-0.5">{icon}</span>
          <span className="text-foreground leading-relaxed">{item}</span>
        </li>
      ))}
    </ul>
  );
};