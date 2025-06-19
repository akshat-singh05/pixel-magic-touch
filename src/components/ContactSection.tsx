
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MessageSquare, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    toast({
      title: "Message sent!",
      description: "We'll get back to you as soon as possible.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-4">
            Get in Touch
          </h2>
          <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
            Have questions about BrandKit? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="glass-card p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="glass-card border-white/20 bg-white/5 backdrop-blur-sm"
                />
              </div>
              
              <div>
                <Input
                  name="email"
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="glass-card border-white/20 bg-white/5 backdrop-blur-sm"
                />
              </div>
              
              <div>
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="glass-card border-white/20 bg-white/5 backdrop-blur-sm resize-none"
                />
              </div>
              
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 transition-all duration-300"
              >
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="glass-card p-6">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mr-4">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Email</h3>
              </div>
              <p className="text-foreground/80">hello@brandkit.com</p>
            </div>

            <div className="glass-card p-6">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mr-4">
                  <MessageSquare className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Live Chat</h3>
              </div>
              <p className="text-foreground/80">Available 24/7 for immediate support</p>
            </div>

            <div className="glass-card p-6">
              <h3 className="text-lg font-semibold text-foreground mb-4">Why Choose BrandKit?</h3>
              <ul className="space-y-2 text-foreground/80">
                <li>• Intuitive and user-friendly interface</li>
                <li>• Advanced brand management features</li>
                <li>• Excellent customer support</li>
                <li>• Regular updates and improvements</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
