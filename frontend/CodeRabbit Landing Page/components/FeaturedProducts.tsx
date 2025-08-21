import { Star, Clock, Shield, Zap } from "lucide-react";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export default function FeaturedProducts() {
  const featuredProducts = [
    {
      id: 1,
      title: "WoW Classic Gold - 1000g",
      game: "World of Warcraft",
      price: "$45.99",
      originalPrice: "$59.99",
      rating: 4.9,
      reviews: 1250,
      deliveryTime: "5-15 min",
      seller: "GoldMaster",
      badge: "Best Seller",
      image: "https://images.unsplash.com/photo-1612980848349-3e3e98730014?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b3JsZCUyMG9mJTIwd2FyY3JhZnR8ZW58MXx8fHwxNzU1NjcyOTg1fDA&ixlib=rb-4.1.0&q=80&w=400"
    },
    {
      id: 2,
      title: "LoL Rank Boost - Gold to Diamond",
      game: "League of Legends",
      price: "$89.99",
      originalPrice: "$120.00",
      rating: 4.8,
      reviews: 890,
      deliveryTime: "1-3 days",
      seller: "ProBoost",
      badge: "Hot Deal",
      image: "https://images.unsplash.com/photo-1619017120498-872bb10a14a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZWFndWUlMjBvZiUyMGxlZ2VuZHN8ZW58MXx8fHwxNzU1NjcyOTg2fDA&ixlib=rb-4.1.0&q=80&w=400"
    },
    {
      id: 3,
      title: "FIFA 24 Ultimate Team Coins - 100K",
      game: "FIFA 24",
      price: "$29.99",
      originalPrice: "$39.99",
      rating: 4.7,
      reviews: 2100,
      deliveryTime: "10-30 min",
      seller: "CoinExpress",
      badge: "Fast Delivery",
      image: "https://images.unsplash.com/photo-1643409333190-5a0ee7ac7385?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaWZhJTIwZ2FtaW5nfGVufDF8fHx8MTc1NTY3Mjk4NXww&ixlib=rb-4.1.0&q=80&w=400"
    },
    {
      id: 4,
      title: "Destiny 2 Exotic Weapon Farm",
      game: "Destiny 2",
      price: "$19.99",
      originalPrice: "$24.99",
      rating: 4.9,
      reviews: 567,
      deliveryTime: "2-4 hours",
      seller: "GearHunter",
      badge: "New",
      image: "https://images.unsplash.com/photo-1725272334053-cc3ac867255d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYW1pbmclMjBzZXR1cCUyMGVzcG9ydHN8ZW58MXx8fHwxNzU1NjcyOTg2fDA&ixlib=rb-4.1.0&q=80&w=400"
    }
  ];

  const getBadgeColor = (badge: string) => {
    switch (badge) {
      case "Best Seller": return "bg-yellow-500";
      case "Hot Deal": return "bg-red-500";
      case "Fast Delivery": return "bg-green-500";
      case "New": return "bg-blue-500";
      default: return "bg-gray-500";
    }
  };

  return (
    <section className="py-20 bg-black text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-6">Featured Products</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Hand-picked deals and popular items from our trusted sellers
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {featuredProducts.map((product) => (
            <div key={product.id} className="group bg-gray-900 border border-gray-800 rounded-xl overflow-hidden hover:border-blue-500 transition-all duration-300 hover:-translate-y-1">
              <div className="relative">
                <ImageWithFallback 
                  src={product.image} 
                  alt={product.title}
                  loading="lazy"
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className={`absolute top-3 left-3 px-2 py-1 ${getBadgeColor(product.badge)} text-white text-xs rounded-full`}>
                  {product.badge}
                </div>
              </div>
              
              <div className="p-4">
                <div className="text-sm text-blue-400 mb-1">{product.game}</div>
                <h3 className="text-lg mb-3 group-hover:text-blue-400 transition-colors line-clamp-2">
                  {product.title}
                </h3>
                
                <div className="flex items-center mb-3">
                  <div className="flex items-center mr-4">
                    <Star className="w-4 h-4 text-yellow-500 mr-1" />
                    <span className="text-sm">{product.rating}</span>
                    <span className="text-xs text-gray-400 ml-1">({product.reviews})</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-400">
                    <Clock className="w-4 h-4 mr-1" />
                    {product.deliveryTime}
                  </div>
                </div>
                
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="text-xl text-green-400">{product.price}</span>
                    <span className="text-sm text-gray-500 line-through ml-2">{product.originalPrice}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-400">
                    <Shield className="w-4 h-4 mr-1" />
                    {product.seller}
                  </div>
                </div>
                
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                  Buy Now
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button variant="outline" className="border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white px-8 py-3">
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
}