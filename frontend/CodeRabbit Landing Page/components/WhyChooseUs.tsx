import { Shield, Clock, Users, Award, Headphones, CreditCard } from "lucide-react";

export default function WhyChooseUs() {
  const features = [
    {
      icon: Shield,
      title: "100% Secure",
      description: "Advanced encryption and secure payment methods protect your data and transactions."
    },
    {
      icon: Clock,
      title: "Fast Delivery",
      description: "Most orders delivered within minutes. We value your time and gaming experience."
    },
    {
      icon: Users,
      title: "Trusted Community",
      description: "Join over 500,000 satisfied customers who trust us with their gaming needs."
    },
    {
      icon: Award,
      title: "Professional Service",
      description: "Expert sellers and boosters with proven track records and excellent ratings."
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      description: "Round-the-clock customer support to help you with any questions or issues."
    },
    {
      icon: CreditCard,
      title: "Multiple Payment Options",
      description: "Pay with credit cards, PayPal, cryptocurrency, and many other methods."
    }
  ];

  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-6">Why Choose Sunrise?</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We're committed to providing the best gaming marketplace experience with unmatched security, speed, and support.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="group text-center">
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl mb-4 group-hover:text-blue-400 transition-colors">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center border-t border-gray-800 pt-16">
          <div>
            <div className="text-3xl md:text-4xl text-blue-400 mb-2">500K+</div>
            <div className="text-gray-300">Happy Customers</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl text-green-400 mb-2">99.9%</div>
            <div className="text-gray-300">Success Rate</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl text-purple-400 mb-2">2M+</div>
            <div className="text-gray-300">Orders Completed</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl text-yellow-400 mb-2">24/7</div>
            <div className="text-gray-300">Customer Support</div>
          </div>
        </div>
      </div>
    </section>
  );
}