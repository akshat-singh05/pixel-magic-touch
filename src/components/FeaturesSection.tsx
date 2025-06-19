
import { Palette, Zap, Shield, Globe, Layers, Smartphone } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: Palette,
      title: "Brand Consistency",
      description: "Maintain consistent branding across all your projects with unified color palettes and typography."
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Access your brand assets instantly with our optimized cloud-based storage system."
    },
    {
      icon: Shield,
      title: "Secure Storage",
      description: "Your brand assets are protected with enterprise-grade security and encryption."
    },
    {
      icon: Globe,
      title: "Global Access",
      description: "Access your brand kits from anywhere in the world with real-time synchronization."
    },
    {
      icon: Layers,
      title: "Version Control",
      description: "Track changes and maintain version history for all your brand components."
    },
    {
      icon: Smartphone,
      title: "Mobile Ready",
      description: "Fully responsive interface that works perfectly on all devices and screen sizes."
    }
  ];

  return (
    <section id="features" className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-4">
            Powerful Features
          </h2>
          <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
            Everything you need to manage your brand identity efficiently and effectively.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="glass-card p-8 hover:scale-105 transition-all duration-300 group"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              
              <h3 className="text-xl font-semibold mb-4 text-foreground">
                {feature.title}
              </h3>
              
              <p className="text-foreground/70 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
