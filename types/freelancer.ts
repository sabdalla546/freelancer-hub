// "@/types/freelancer.ts"
export interface Freelancer {
  id: string;
  name: string;
  role: string;
  level: string;
  rating: number;
  reviewCount: number;
  price: number;
  image: string;
  category: string;
  deliveryTime: number;
  location: string;
  skills: string[];
}

export interface FilterState {
  searchQuery: string;
  category: string;
  minBudget: number;
  maxBudget: number;
  deliveryTime: string;
  location: string;
  sortBy: string;
  skills: string; // Added to match FilterSidebar and Home component
}
