import { Button } from "./ui/button";
import { Play, Star, Users, Clock } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export default function HeroSection() {
  const popularGames = [
    {
      name: "World of Warcraft",
      image: "https://images.unsplash.com/photo-1612980848349-3e3e98730014?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b3JsZCUyMG9mJTIwd2FyY3JhZnR8ZW58MXx8fHwxNzU1NjcyOTg1fDA&ixlib=rb-4.1.0&q=80&w=1080",
      category: "MMORPG",
      ordersK: 150
    },
    {
      name: "League of Legends",
      image: "https://images.unsplash.com/photo-1619017120498-872bb10a14a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZWFndWUlMjBvZiUyMGxlZ2VuZHN8ZW58MXx8fHwxNzU1NjcyOTg2fDA&ixlib=rb-4.1.0&q=80&w=1080",
      category: "MOBA",
      ordersK: 95
    },
    {
      name: "FIFA 24",
      image: "https://images.unsplash.com/photo-1643409333190-5a0ee7ac7385?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaWZhJTIwZ2FtaW5nfGVufDF8fHx8MTc1NTY3Mjk4NXww&ixlib=rb-4.1.0&q=80&w=1080",
      category: "Sports",
      ordersK: 120
    }
  ];

  return (
    <section className="relative min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1725272334053-cc3ac867255d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYW1pbmclMjBzZXR1cCUyMGVzcG9ydHN8ZW58MXx8fHwxNzU1NjcyOTg2fDA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Gaming Setup"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-200px)]">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 bg-blue-600/20 border border-blue-500/30 rounded-full">
                <Play className="w-4 h-4 mr-2 text-blue-400" />
                <span className="text-blue-300">Trusted Gaming Marketplace</span>
              </div>
              <h1 className="text-5xl md:text-7xl leading-tight">
                Level Up Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">Gaming Experience</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-xl">
                Buy game currency, items, boosting services, and accounts from trusted sellers. Fast delivery, secure transactions, 24/7 support.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg">
                Shop Now
              </Button>
              <Button variant="outline" className="border-gray-600 text-white hover:bg-gray-800 px-8 py-4 text-lg">
                View Services
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-700">
              <div className="text-center">
                <div className="text-2xl mb-1">500K+</div>
                <div className="text-sm text-gray-400">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl mb-1">24/7</div>
                <div className="text-sm text-gray-400">Customer Support</div>
              </div>
              <div className="text-center">
                <div className="text-2xl mb-1">99.9%</div>
                <div className="text-sm text-gray-400">Success Rate</div>
              </div>
            </div>
          </div>

          {/* Right Content - Popular Games */}
          <div className="space-y-6">
            <div className="text-center">
              <h3 className="text-2xl mb-2">Popular Games</h3>
              <p className="text-gray-400">Choose from our most popular gaming services</p>
            </div>

            <div className="grid gap-4">
              {popularGames.map((game) => (
                <div key={game.name} className="group relative bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-4 hover:bg-gray-700/50 transition-all duration-300 cursor-pointer">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 rounded-lg overflow-hidden">
                      <ImageWithFallback
                        src={game.image}
                        alt={game.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg mb-1">{game.name}</h4>
                      <p className="text-sm text-gray-400">{game.category}</p>
                      <div className="flex items-center mt-2 space-x-4 text-sm text-gray-300">
                        <div className="flex items-center">
                          <Star className="w-4 h-4 text-yellow-500 mr-1" />
                          4.9
                        </div>
                        <div className="flex items-center">
                          <Users className="w-4 h-4 text-blue-400 mr-1" />
                          {game.ordersK}K orders
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 text-green-400 mr-1" />
                          Fast delivery
                        </div>
                      </div>
                    </div>
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                      <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                        Browse
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-10 w-20 h-20 bg-blue-600/10 rounded-full blur-xl"></div>
      <div className="absolute top-1/2 right-20 w-32 h-32 bg-purple-600/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-1/4 left-1/3 w-24 h-24 bg-green-600/10 rounded-full blur-xl"></div>
    </section>
  );
}