import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ReactNode } from "react";

interface PillarCardProps {
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  icon: ReactNode;
  gradient: "hero" | "innovation" | "community" | "heritage" | "impact";
  buttonVariant: "hero" | "innovation" | "community" | "heritage" | "impact";
}

const PillarCard = ({ 
  title, 
  subtitle, 
  description, 
  features, 
  icon, 
  gradient,
  buttonVariant 
}: PillarCardProps) => {
  const gradientClasses = {
    hero: "bg-gradient-hero",
    innovation: "bg-gradient-innovation", 
    community: "bg-gradient-community",
    heritage: "bg-heritage-earth",
    impact: "bg-impact-green"
  };

  return (
    <Card className="group relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-smooth">
      {/* Gradient Header */}
      <div className={`${gradientClasses[gradient]} p-6 text-white relative overflow-hidden`}>
        <div className="absolute top-0 right-0 opacity-20 transform translate-x-4 -translate-y-4 scale-150">
          {icon}
        </div>
        <div className="relative z-10">
          <h3 className="text-2xl font-bold mb-2">{title}</h3>
          <p className="text-white/90 font-medium">{subtitle}</p>
        </div>
      </div>
      
      {/* Content */}
      <div className="p-6">
        <p className="text-muted-foreground mb-4 leading-relaxed">
          {description}
        </p>
        
        <ul className="space-y-2 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2 text-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        
        <Button variant={buttonVariant} className="w-full group-hover:scale-105 transition-smooth">
          Learn More
        </Button>
      </div>
    </Card>
  );
};

export default PillarCard;