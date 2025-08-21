import { Button } from "./ui/button";
import { Search, ShoppingCart, ChevronDown } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu";

export default function Header() {
  return (
    <header className="flex items-center justify-between p-4 bg-black border-b border-gray-800">
      {/* Left Section - Logo and Search */}
      <div className="flex items-center space-x-6">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L15.09 8.26L22 9L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9L8.91 8.26L12 2Z" fill="black"/>
            </svg>
          </div>
          <span className="text-white text-xl font-medium">sunrise</span>
        </div>

        {/* Search Bar */}
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-4 w-4 text-gray-400" />
          </div>
          <input 
            type="text" 
            placeholder="Search your game"
            aria-label="Search games"
            className="bg-gray-800 border border-gray-700 rounded-lg pl-10 pr-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-64"
          />
        </div>
      </div>

      {/* Center Navigation */}
      <nav className="hidden lg:flex items-center space-x-8">
        <a href="#" className="text-gray-300 hover:text-white transition-colors">Currency</a>
        <a href="#" className="text-gray-300 hover:text-white transition-colors">Items</a>
        <DropdownMenu>
          <DropdownMenuTrigger className="text-gray-300 hover:text-white transition-colors inline-flex items-center gap-1">
            Boosting <ChevronDown className="h-3 w-3" />
          </DropdownMenuTrigger>
          <DropdownMenuContent sideOffset={6} align="start">
            <DropdownMenuItem asChild>
              <a href="https://www.mmoexp.com/Artale/Mesos.html" target="_blank" rel="noopener noreferrer">Grandmaster Pro</a>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <a href="#" className="text-gray-300 hover:text-white transition-colors">Coach</a>
        <a href="#" className="text-gray-300 hover:text-white transition-colors">Accounts</a>
        <a href="#" className="text-gray-300 hover:text-white transition-colors">Top Up</a>
      </nav>

      {/* Right Section - Language, Auth, Cart */}
      <div className="flex items-center space-x-4">
        {/* Language and Currency Selector */}
        <div className="flex items-center space-x-2 text-white">
          <div className="flex items-center space-x-1">
            <div className="w-5 h-4 bg-red-600 rounded-sm flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-red-600 via-white to-red-600"></div>
              <div className="absolute inset-0 bg-gradient-to-b from-red-600 via-transparent to-red-600"></div>
              <div className="w-3 h-2 bg-blue-800 absolute top-0 left-0"></div>
            </div>
            <span className="text-sm">English</span>
            <ChevronDown className="h-3 w-3" />
          </div>
          <div className="text-gray-400">|</div>
          <div className="flex items-center space-x-1">
            <span className="text-sm">USD</span>
            <ChevronDown className="h-3 w-3" />
          </div>
        </div>

        {/* Auth Buttons */}
        <Button variant="ghost" className="text-white hover:bg-gray-800 px-4 py-2">
          Log In
        </Button>
        <Button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2">
          Sign Up
        </Button>

        {/* Cart */}
        <div className="relative">
          <Button variant="ghost" className="text-white hover:bg-gray-800 p-2">
            <ShoppingCart className="h-5 w-5" />
            <span className="ml-2">Cart</span>
            <span className="ml-1 bg-red-600 text-white text-xs rounded-full px-1.5 py-0.5 min-w-[20px] h-5 flex items-center justify-center">
              0
            </span>
          </Button>
        </div>
      </div>
    </header>
  );
}