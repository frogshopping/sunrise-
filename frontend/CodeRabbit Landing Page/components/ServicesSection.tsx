import { Coins, Package, TrendingUp, Users, Shield, Zap } from "lucide-react";
import { Button } from "./ui/button";

export default function ServicesSection() {
  const services = [
    {
      icon: Coins,
      name: "Game Currency",
      description: "Buy gold, coins, and in-game currency for all major games",
      features: ["Instant delivery", "Best rates", "Safe transactions"],
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: Package,
      name: "Items & Equipment",
      description: "Rare items, weapons, and equipment for your characters",
      features: ["Legendary items", "Fast delivery", "Verified sellers"],
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: TrendingUp,
      name: "Boosting Services",
      description: "Level up, rank up, and achievement boosting by pros",
      features: ["Professional players", "Quick results", "Account safety"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Users,
      name: "Personal Coach",
      description: "One-on-one coaching from professional esports players",
      features: ["Expert guidance", "Flexible schedule", "Proven results"],
      color: "from-green-500 to-teal-500"
    },
    {
      icon: Shield,
      name: "Game Accounts",
      description: "Pre-leveled accounts with rare items and achievements",
      features: ["High-level accounts", "Rare collections", "Secure transfer"],
      color: "from-red-500 to-pink-500"
    },
    {
      icon: Zap,
      name: "Top Up Services",
      description: "Add credits, gems, and premium currency to your account",
      features: ["Multiple payment options", "Instant top-up", "Bonus rewards"],
      color: "from-indigo-500 to-purple-500"
    }
  ];

  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-6">Our Gaming Services</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Everything you need to dominate your favorite games. From currency and items to professional coaching and boosting services.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div key={index} className="group bg-gray-800 border border-gray-700 rounded-xl p-6 hover:border-gray-600 transition-all duration-300 hover:-translate-y-2">
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl mb-3 group-hover:text-blue-400 transition-colors">{service.name}</h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-400">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Browse {service.name}
                </Button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}