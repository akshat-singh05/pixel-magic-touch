
import { Star, Package, BarChart3, Building2, MessageSquare, Search } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: Star,
      title: "Automated Review Management",
      description: "Automatically send follow-up requests for feedback while staying within Amazon's rules.",
      gradient: "from-yellow-400 to-orange-500"
    },
    {
      icon: Package,
      title: "Inventory Tracking",
      description: "Get real-time alerts when you're running low on stock to prevent lost sales.",
      gradient: "from-orange-400 to-red-500"
    },
    {
      icon: BarChart3,
      title: "Performance Dashboard",
      description: "Monitor your store's performance with detailed analytics and insights.",
      gradient: "from-cyan-400 to-blue-500"
    },
    {
      icon: Building2,
      title: "Multi-Store Management",
      description: "Manage multiple Amazon stores from a single, unified dashboard.",
      gradient: "from-red-400 to-pink-500"
    },
    {
      icon: MessageSquare,
      title: "Automated Messaging",
      description: "Send personalized messages to customers automatically while maintaining compliance.",
      gradient: "from-gray-400 to-gray-600"
    },
    {
      icon: Search,
      title: "Competitor Analysis",
      description: "Track competitor pricing, keywords, and strategies to stay ahead of the competition.",
      gradient: "from-teal-400 to-cyan-500"
    }
  ];

  return (
    <section id="features" className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-8">
            <span className="text-white">Everything You Need to</span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Scale Your Business
            </span>
          </h2>
          <p className="text-xl text-foreground/80 max-w-4xl mx-auto">
            Our comprehensive suite of tools helps you automate operations, increase sales, and 
            grow your Amazon business efficiently.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="glass-card p-8 hover:scale-105 transition-all duration-300 group"
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-8 h-8 text-white" />
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
