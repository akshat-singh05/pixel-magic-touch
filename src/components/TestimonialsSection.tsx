
const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah Wilson",
      title: "Amazon Seller",
      image: "/lovable-uploads/fc0e6c73-4b61-4358-abf1-91877026bc55.png",
      quote: "I run a small Amazon store on the side, and honestly, I don't have time to check performance every day. Amzigo shows me what's happening without needing to dig through reports. I really like how it sends out follow-up requests for feedback automatically, because that's something I always used to forget.",
      rating: 5
    },
    {
      name: "Daniel Carter",
      title: "Canadian Amazon Seller",
      quote: "I used to remind myself to message buyers manually—but let's face it, I'd forget half the time. Amzigo took that off my list. The review request system runs in the background, and I can focus on orders and stock. The dashboard is straightforward and gives me what I need to know fast.",
      rating: 5
    },
    {
      name: "Maria Rodriguez",
      title: "Multi-Store Owner",
      quote: "Managing three different Amazon stores was becoming overwhelming until I found Amzigo. The multi-store dashboard lets me see everything at a glance, and the automated inventory alerts have saved me from stockouts multiple times. It's like having a business assistant that never sleeps.",
      rating: 5
    }
  ];

  const renderStars = (rating: number) => {
    return (
      <div className="flex space-x-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    );
  };

  return (
    <section id="testimonials" className="py-24 px-4 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-900 dark:to-slate-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-blue-600 dark:text-blue-400 mb-4 tracking-wider uppercase">Customer Testimonials</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            What Our Sellers Say
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Join thousands of successful Amazon sellers who trust Amzigo to grow their business
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
            >
              {renderStars(testimonial.rating)}
              
              <blockquote className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-6">
                "{testimonial.quote}"
              </blockquote>
              
              <div className="flex items-center">
                {testimonial.image ? (
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4 border-2 border-blue-200 dark:border-blue-600"
                  />
                ) : (
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center mr-4">
                    <span className="text-white font-semibold text-lg">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                )}
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">{testimonial.name}</p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">{testimonial.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-2 bg-white dark:bg-gray-800 rounded-full px-6 py-3 shadow-md">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 border-2 border-white"></div>
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 border-2 border-white"></div>
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-green-400 to-green-600 border-2 border-white"></div>
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 border-2 border-white"></div>
            </div>
            <span className="text-gray-700 dark:text-gray-300 font-medium">
              Join 10,000+ happy sellers
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
