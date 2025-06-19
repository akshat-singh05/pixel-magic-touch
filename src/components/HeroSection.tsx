
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="pt-32 pb-24 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-6xl md:text-7xl font-bold mb-8">
          <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Grow Your Amazon
          </span>
          <br />
          <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Business
          </span>
          <br />
          <span className="text-white">
            with Confidence
          </span>
        </h1>
        
        <p className="text-xl text-foreground/80 max-w-4xl mx-auto mb-12 leading-relaxed">
          The all-in-one platform that helps Amazon sellers automate reviews, 
          manage inventory, and scale their business with powerful insights and tools.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg"
            className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-4 text-lg font-semibold"
          >
            Start Free Trial
          </Button>
          
          <Button 
            size="lg"
            variant="outline"
            className="bg-transparent border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold"
          >
            Watch Demo
          </Button>
        </div>

        <p className="text-foreground/60 mt-12 text-lg">
          Trusted by 10,000+ Amazon sellers worldwide
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
