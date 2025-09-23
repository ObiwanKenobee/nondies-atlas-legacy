import PillarCard from "./PillarCard";
import { 
  Trophy, 
  Cpu, 
  Heart, 
  Coins, 
  Globe 
} from "lucide-react";

const PillarsSection = () => {
  const pillars = [
    {
      title: "Legacy Meets Future",
      subtitle: "Digital Heritage Museum",
      description: "Transform Nondies' century-old heritage into an immersive digital experience, preserving stories while embracing blockchain and AR technology.",
      features: [
        "Blockchain-secured club archives",
        "AR-enhanced trophy displays", 
        "Interactive oral history collection",
        "Digital legacy preservation"
      ],
      icon: <Trophy size={48} />,
      gradient: "heritage" as const,
      buttonVariant: "heritage" as const
    },
    {
      title: "Sport as Innovation", 
      subtitle: "AI-Powered Performance",
      description: "Revolutionary training technology combining AI analytics, IoT tracking, and VR simulations to elevate athletic performance safely.",
      features: [
        "AI performance tracking & injury prediction",
        "Bio-nutrition labs with Kenyan superfoods",
        "VR/AR training simulations", 
        "IoT-enabled recovery monitoring"
      ],
      icon: <Cpu size={48} />,
      gradient: "innovation" as const,
      buttonVariant: "innovation" as const
    },
    {
      title: "Community Pivot",
      subtitle: "Youth Development Foundation", 
      description: "Rugby becomes a catalyst for social change through scholarship programs, mentorship, and humanitarian match days.",
      features: [
        "Underprivileged youth scholarships",
        "School rugby festival network",
        "Climate resilience project funding",
        "Social innovation showcases"
      ],
      icon: <Heart size={48} />,
      gradient: "community" as const,
      buttonVariant: "community" as const
    },
    {
      title: "Economic Backbone",
      subtitle: "Sustainable Impact Model",
      description: "Create a self-sustaining economy through fan tokens, impact investment, and community co-ownership on the blockchain.",
      features: [
        "Nondies Coin fan token ecosystem",
        "Impact investment opportunities",
        "Blockchain fan co-ownership",
        "Regenerative project funding"
      ],
      icon: <Coins size={48} />,
      gradient: "impact" as const,
      buttonVariant: "impact" as const
    },
    {
      title: "Global Bridge", 
      subtitle: "Cultural Diplomacy",
      description: "Position Nondies as cultural ambassadors, building bridges across continents through sport and shared heritage.",
      features: [
        "Pan-African Rugby League partnership",
        "Cross-cultural exchange programs", 
        "Heritage diplomacy initiatives",
        "International peace through sport"
      ],
      icon: <Globe size={48} />,
      gradient: "hero" as const,
      buttonVariant: "hero" as const
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Five Pillars of Transformation
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Each pillar represents a fundamental shift from traditional rugby to 
            a holistic ecosystem that serves community, innovation, and global impact.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {pillars.map((pillar, index) => (
            <div 
              key={index} 
              className={`${index === 4 ? 'md:col-span-2 lg:col-span-1 lg:col-start-2' : ''}`}
            >
              <PillarCard {...pillar} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PillarsSection;