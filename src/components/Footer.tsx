import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Atlas Sanctum x Nondies</h3>
            <p className="text-primary-foreground/80 mb-6 max-w-md">
              Transforming Kenya's oldest rugby club into the world's first 
              humanitarian sports economy. Heritage meets innovation.
            </p>
            <div className="flex gap-3">
              <Button variant="secondary" size="sm">
                Connect
              </Button>
              <Button variant="outline" size="sm" className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10">
                Learn More
              </Button>
            </div>
          </div>
          
          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4">Innovation</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>AI Performance</li>
              <li>Blockchain Legacy</li>
              <li>VR Training</li>
              <li>Bio-nutrition Labs</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Community</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>Youth Programs</li>
              <li>Scholarships</li>
              <li>Impact Investment</li>
              <li>Global Network</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm text-primary-foreground/60">
          <p>&copy; 2024 Atlas Sanctum x Nondies. Building the future of humanitarian sport.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;