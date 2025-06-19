"use client";

import {
  Search,
  ShoppingBagIcon,
  Bell,
  MessageCircle,
  X,
  ArrowRight,
} from "lucide-react"; // Added ArrowRight import
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import Image from "next/image";

interface HeaderProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  onSearchSubmit?: () => void; // Added submit handler
}

export default function Header({
  searchQuery,
  onSearchChange,
  onSearchSubmit,
}: HeaderProps) {
  const [showMobileSearch, setShowMobileSearch] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearchSubmit?.();
  };

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className=" sm:px-6">
        {/* Main header row */}
        <div className="flex items-center justify-between  px-[4%] h-16">
          {/* Logo and mobile menu button */}
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">F</span>
              </div>
              <span className="ml-2 text-xl font-bold text-gray-900 hidden sm:block">
                FreelanceHub
              </span>
            </div>
          </div>

          {/* Desktop Search Bar - Hidden on mobile */}
          <div className="flex-1 max-w-lg mx-8 hidden md:block">
            <form onSubmit={handleSubmit} className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <Input
                type="text"
                placeholder="Find services..."
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                className="relative pl-10 pr-12 py-2 w-full border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
              <button
                type="submit"
                className="absolute h-[70%] w-[30px] inset-y-0 right-2 top-1.5   flex items-center justify-center rounded-sm bg-green-600"
              >
                <ArrowRight className="h-5 w-5 text-white " />
              </button>
            </form>
          </div>

          {/* Right side icons */}
          <div className="flex items-center space-x-1">
            {/* Mobile search toggle button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setShowMobileSearch(!showMobileSearch)}
            >
              {showMobileSearch ? (
                <X className="h-5 w-5 text-gray-500" />
              ) : (
                <Search className="h-5 w-5 text-gray-500" />
              )}
            </Button>

            {/* Desktop icons - hidden on mobile */}
            <Button
              variant="ghost"
              size="icon"
              className="hidden md:inline-flex"
            >
              <MessageCircle className="h-5 w-5 text-gray-500" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="hidden md:inline-flex"
            >
              <Bell className="h-5 w-5 text-gray-500" />
            </Button>

            {/* Shopping bag - always visible */}
            <Button variant="ghost" size="icon">
              <ShoppingBagIcon className="h-5 w-5 text-gray-500" />
            </Button>

            {/* User avatar */}
            <div className="ml-2">
              <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-gray-200">
                <Image
                  src="/images/avatar.png"
                  alt="User avatar"
                  width={32}
                  height={32}
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Mobile search bar - appears when toggled */}
        {showMobileSearch && (
          <div className="pb-4 md:hidden">
            <form onSubmit={handleSubmit} className="relative mt-2">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <Input
                type="text"
                placeholder="Find services..."
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                className="pl-10 pr-12 py-2 w-full border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                autoFocus
              />
              <button
                type="submit"
                className="absolute h-[70%] w-[30px] inset-y-0 right-2 top-1.5   flex items-center justify-center rounded-sm bg-green-600"
              >
                <ArrowRight className="h-5 w-5 text-white " />
              </button>
            </form>
          </div>
        )}
      </div>
    </header>
  );
}
