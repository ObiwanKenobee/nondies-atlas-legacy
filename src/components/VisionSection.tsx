import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const VisionSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-muted to-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, hsl(var(--primary)) 0%, transparent 50%),
                           radial-gradient(circle at 75% 75%, hsl(var(--secondary)) 0%, transparent 50%)`
        }} />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
            The Immortal Legacy Vision
          </h2>
          
          <Card className="p-8 md:p-12 shadow-heritage border-0 bg-card/80 backdrop-blur-sm">
            <div className="space-y-8">
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                Nondies becomes more than just a rugby club — we transform into a 
                <strong className="text-primary"> pillar of Atlas Sanctum's humanitarian economy</strong>, 
                showing how sports can heal communities, fund innovation, and project 
                Kenya's cultural power into the global future.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-12">
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2">🏆</div>
                  <div className="text-lg font-semibold text-foreground mb-2">Heal Communities</div>
                  <div className="text-muted-foreground text-sm">
                    Through sport, scholarships, and social programs
                  </div>
                </div>
                
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-tech-blue mb-2">🚀</div>
                  <div className="text-lg font-semibold text-foreground mb-2">Fund Innovation</div>
                  <div className="text-muted-foreground text-sm">
                    Via impact investment and regenerative projects
                  </div>
                </div>
                
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-secondary mb-2">🌍</div>
                  <div className="text-lg font-semibold text-foreground mb-2">Global Impact</div>
                  <div className="text-muted-foreground text-sm">
                    Projecting Kenya's cultural power worldwide
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-community p-6 rounded-lg text-white">
                <p className="text-lg font-medium mb-4">
                  "A model of how sport can last 100+ years by embracing innovation + compassion"
                </p>
                <p className="text-white/80">
                  — The Atlas Sanctum Promise
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
                <Button variant="hero" size="lg" className="text-lg px-8 py-4">
                  Join the Movement
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 py-4">
                  Download Whitepaper
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;