
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const PricingSection = () => {
  const plans = [
    {
      name: "Starter",
      price: "$15.99",
      period: "per month",
      description: "Up to 500 orders",
      subtitle: "Are just starting or selling part time on Amazon. Perfect for small businesses or individuals managing a low volume of orders.",
      features: [
        "Up to 500 orders per month",
        "Basic review automation",
        "Email support",
        "Basic analytics",
        "Mobile app access"
      ],
      popular: false,
      buttonVariant: "outline" as const
    },
    {
      name: "Growth",
      price: "$29.99",
      period: "per month",
      description: "Up to 2,500 orders",
      subtitle: "Are growing and scaling operations. Ideal for sellers who are expanding their product range and need more review automation.",
      badge: "MOST POPULAR",
      features: [
        "Up to 2,500 orders per month",
        "Advanced review automation",
        "Priority support",
        "Advanced analytics",
        "Team collaboration",
        "Custom templates"
      ],
      popular: true,
      buttonVariant: "default" as const
    },
    {
      name: "Pro",
      price: "$59.99",
      period: "per month",
      description: "Up to 10,000 orders",
      subtitle: "Have an established business with consistent sales. Great for professional Amazon sellers who need detailed insights and performance tracking.",
      features: [
        "Up to 10,000 orders per month",
        "Full automation suite",
        "Dedicated support",
        "Advanced insights",
        "API access",
        "Custom integrations",
        "Priority processing"
      ],
      popular: false,
      buttonVariant: "outline" as const
    },
    {
      name: "Enterprise",
      price: "$119.99",
      period: "per month",
      description: "30,000 orders",
      subtitle: "Run a high-volume Amazon store or a large brand. Designed for power sellers who need large automation and full-scale operations.",
      features: [
        "30,000+ orders per month",
        "Enterprise automation",
        "24/7 dedicated support",
        "Custom analytics",
        "White-label options",
        "Advanced API access",
        "Custom implementations"
      ],
      popular: false,
      buttonVariant: "outline" as const
    }
  ];

  return (
    <section id="pricing" className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-8">
            <span className="text-white">Choose Your</span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Growth Plan
            </span>
          </h2>
          
          <p className="text-foreground/80 max-w-4xl mx-auto mb-8 text-lg leading-relaxed">
            Find the perfect plan based on your monthly order volume. Whether you're just starting out or 
            scaling fast, choose a plan that fits your growth and unlock the full power of our all-in-one 
            platform.
          </p>
          
          <p className="text-xl font-semibold text-foreground">
            Subscriptions start from just $15.99 per month.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`glass-card p-6 hover:scale-105 transition-all duration-300 relative ${
                plan.popular ? "ring-2 ring-purple-400 bg-gradient-to-b from-purple-900/20 to-transparent" : ""
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1 rounded-full text-xs font-semibold">
                    {plan.badge}
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  {plan.name}
                </h3>
                <p className="text-foreground/80 font-medium mb-2">
                  {plan.description}
                </p>
                <p className="text-foreground/70 text-sm mb-6 leading-relaxed">
                  {plan.subtitle}
                </p>
                
                <div className="mb-6">
                  <div className="flex items-baseline justify-center">
                    <span className="text-3xl font-bold text-foreground">
                      {plan.price}
                    </span>
                    <span className="text-foreground/70 ml-2 text-sm">
                      {plan.period}
                    </span>
                  </div>
                </div>
              </div>

              <ul className="space-y-3 mb-6">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      <Check className="w-2.5 h-2.5 text-white" />
                    </div>
                    <span className="text-foreground/80 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                variant={plan.buttonVariant}
                className={`w-full transition-all duration-300 ${
                  plan.popular
                    ? "bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white"
                    : "bg-white text-black hover:bg-gray-100"
                }`}
              >
                Get Started
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
