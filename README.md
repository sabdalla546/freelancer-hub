# freelancer-hub
Key Implementation Details
1-State Management:
  Used React's useState for filter state management
  useMemo for optimized filtering of freelancers
  Filtering by: search query, category, budget, delivery time, location, and skills

2-Core Components:
  Header: Search functionality and navigation
  FilterSidebar: Filter controls with responsive mobile view
  FreelancerGrid: Displays filtered freelancers with sorting and pagination
  CarouselComponent: Horizontal category navigation
  Footer: Site navigation and company info

3-Data Flow:
   Filters are stored in a single state object
   Filter changes trigger re-renders of the freelancer grid
   Sorting options change display order without re-filtering

4-Responsive Design:
   Mobile-friendly filter sidebar with toggle
   Responsive grid layout (1-4 columns based on screen size)
   Adaptive carousel with scroll indicators

5-How to Run the Project
Setup:
  npm install
  Run Development Server: npm run dev

6-Tools Used
  Next.js (App Router) 
  React 18
  TypeScript
  Tailwind CSS
  Lucide React (icons)
  Shadcn/ui components (Button, Input, Card, etc.)
7-Implementation Notes
  The application features:
   1-Search & Filtering:
     Real-time search across name, role, and skills
     Multi-criteria filtering with budget ranges
     Category and skill-based filtering
   2-Sorting & Pagination:
     Sort by rating (high/low) and price (high/low)
     8 items per page with navigation controls

   3-UI Components:
     Responsive card layout for freelancers
     Interactive carousel with smooth scrolling
     Mobile-optimized filter drawer
     Consistent design system with Tailwind

   4-Performance:
     Memoized filtered results
     Dynamic component loading
     Efficient state updates
