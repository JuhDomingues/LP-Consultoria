interface ComparisonItem {
  service: string;
  price: string;
}

interface PriceComparisonProps {
  items: ComparisonItem[];
  specialPrice: string;
}

export const PriceComparison = ({ items, specialPrice }: PriceComparisonProps) => {
  return (
    <div className="bg-muted rounded-lg p-6">
      <h4 className="font-semibold text-lg mb-4 text-center">É menos que:</h4>
      
      <div className="space-y-3 mb-6">
        {items.map((item, index) => (
          <div key={index} className="flex justify-between items-center text-muted-foreground">
            <span>{item.service}</span>
            <span className="font-semibold">{item.price}</span>
          </div>
        ))}
      </div>
      
      <div className="border-t pt-4 text-center">
        <div className="text-2xl font-bold text-premium">
          VOCÊ PAGA APENAS: {specialPrice}
        </div>
      </div>
    </div>
  );
};