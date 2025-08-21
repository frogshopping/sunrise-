export default function ButterflyLogo() {
  return (
    <div className="absolute left-16 top-1/2 transform -translate-y-1/2">
      <div className="relative w-48 h-48">
        {/* Left wing */}
        <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-20 h-32 rounded-full bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 opacity-80 blur-sm"></div>
        <div className="absolute left-2 top-1/2 transform -translate-y-1/2 w-16 h-28 rounded-full bg-gradient-to-br from-cyan-300 via-blue-400 to-purple-500"></div>
        
        {/* Right wing */}
        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-20 h-32 rounded-full bg-gradient-to-bl from-pink-400 via-orange-500 to-red-600 opacity-80 blur-sm"></div>
        <div className="absolute right-2 top-1/2 transform -translate-y-1/2 w-16 h-28 rounded-full bg-gradient-to-bl from-pink-300 via-orange-400 to-red-500"></div>
        
        {/* Center body */}
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-20 bg-gray-600 rounded-full"></div>
        
        {/* Glow effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-400 opacity-20 blur-xl rounded-full"></div>
      </div>
    </div>
  );
}