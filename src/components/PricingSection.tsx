
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const PricingSection = () => {
  const plans = [
    {
      name: "Starter",
      price: "$9",
      period: "/month",
      description: "Perfect for individuals and small projects",
      features: [
        "Up to 5 brand kits",
        "Basic templates",
        "Cloud storage (1GB)",
        "Mobile app access",
        "Email support"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$29",
      period: "/month",
      description: "Ideal for growing businesses and teams",
      features: [
        "Unlimited brand kits",
        "Premium templates",
        "Cloud storage (10GB)",
        "Team collaboration",
        "Version control",
        "Priority support",
        "Custom integrations"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$99",
      period: "/month",
      description: "For large organizations with advanced needs",
      features: [
        "Everything in Professional",
        "Unlimited storage",
        "Advanced analytics",
        "Custom branding",
        "Dedicated support",
        "SSO integration",
        "API access"
      ],
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-4">
            Simple Pricing
          </h2>
          <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
            Choose the perfect plan for your brand management needs. All plans include a 14-day free trial.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`glass-card p-8 hover:scale-105 transition-all duration-300 relative ${
                plan.popular ? "ring-2 ring-purple-400" : ""
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  {plan.name}
                </h3>
                <p className="text-foreground/70 mb-4">
                  {plan.description}
                </p>
                <div className="flex items-baseline justify-center">
                  <span className="text-4xl font-bold text-foreground">
                    {plan.price}
                  </span>
                  <span className="text-foreground/70 ml-1">
                    {plan.period}
                  </span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-3">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-foreground/80">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full ${
                  plan.popular
                    ? "bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
                    : "bg-white/10 hover:bg-white/20 border border-white/20"
                } transition-all duration-300`}
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
