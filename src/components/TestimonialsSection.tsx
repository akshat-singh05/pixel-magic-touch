
const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah Wilson",
      title: "Amazon Seller",
      image: "/lovable-uploads/fc0e6c73-4b61-4358-abf1-91877026bc55.png",
      quote: "I run a small Amazon store on the side, and honestly, I don't have time to check performance every day. Amzigo shows me what's happening without needing to dig through reports. I really like how it sends out follow-up requests for feedback automatically, because that's something I always used to forget. It makes a difference knowing that's taken care of and still within Amazon's rules. It just helps me run my store more confidently."
    },
    {
      name: "Daniel Carter",
      title: "Canadian Amazon Seller",
      quote: "I used to remind myself to message buyers manually—but let's face it, I'd forget half the time. Amzigo took that off my list. The review request system runs in the background, and I can focus on orders and stock. I especially like the dashboard—I check it daily. It's straightforward and gives me what I need to know fast, like what's selling well or when I'm close to needing a restock. Makes decision-making less stressful."
    }
  ];

  return (
    <section id="testimonials" className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-lg text-foreground/60 mb-4">• Customer Testimonials</p>
          <h2 className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-8">
            Happy Sellers
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="glass-card p-8 hover:scale-105 transition-all duration-300"
            >
              {index === 0 && (
                <div className="mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-20 h-20 rounded-full object-cover"
                  />
                </div>
              )}
              
              <blockquote className="text-foreground/90 text-lg leading-relaxed mb-6">
                "{testimonial.quote}"
              </blockquote>
              
              <div className="flex items-center">
                <div className="w-3 h-3 bg-purple-400 rounded-full mr-3"></div>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-foreground/70 text-sm">{testimonial.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
