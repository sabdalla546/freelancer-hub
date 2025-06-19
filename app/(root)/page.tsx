"use client";

import { useState, useMemo } from "react";
import Header from "@/components/header";
import FilterSidebar from "@/components/filterSection"; // Fixed typo from "filterSidebare"
import FreelancerGrid from "@/components/freelancerGrid";
import Footer from "@/components/footer";
import { freelancers } from "@/data/freelancers";
import { FilterState } from "@/types/freelancer";
import CarouselComponent from "@/components/CarouselComponent";

export default function Home() {
  const [filters, setFilters] = useState<FilterState>({
    searchQuery: "",
    category: "All Categories",
    minBudget: 0,
    maxBudget: 1000,
    deliveryTime: "Any Time",
    location: "",
    sortBy: "rating_high",
    skills: "All Skills",
  });

  const filteredFreelancers = useMemo(() => {
    return freelancers.filter((freelancer) => {
      // Search query filter
      const matchesSearch =
        filters.searchQuery === "" ||
        freelancer.name
          .toLowerCase()
          .includes(filters.searchQuery.toLowerCase()) ||
        freelancer.role
          .toLowerCase()
          .includes(filters.searchQuery.toLowerCase()) ||
        freelancer.skills.some((skill) =>
          skill.toLowerCase().includes(filters.searchQuery.toLowerCase())
        );

      // Category filter
      const matchesCategory =
        filters.category === "All Categories" ||
        freelancer.category === filters.category;

      // Budget filter
      const matchesBudget =
        freelancer.price >= filters.minBudget &&
        freelancer.price <= filters.maxBudget;

      // Delivery time filter
      const matchesDelivery =
        filters.deliveryTime === "Any Time" ||
        (filters.deliveryTime === "Express 24H" &&
          freelancer.deliveryTime <= 1) ||
        (filters.deliveryTime === "Up to 3 days" &&
          freelancer.deliveryTime <= 3) ||
        (filters.deliveryTime === "Up to 7 days" &&
          freelancer.deliveryTime <= 7);

      // Location filter
      const matchesLocation =
        filters.location === "" ||
        freelancer.location
          .toLowerCase()
          .includes(filters.location.toLowerCase());

      // Skills filter
      const matchesSkills =
        filters.skills === "All Skills" ||
        freelancer.skills.some((skill) =>
          skill.toLowerCase().includes(filters.skills.toLowerCase())
        );

      return (
        matchesSearch &&
        matchesCategory &&
        matchesBudget &&
        matchesDelivery &&
        matchesLocation &&
        matchesSkills
      );
    });
  }, [filters]);

  const handleSearchChange = (query: string) => {
    setFilters((prev) => ({ ...prev, searchQuery: query }));
  };

  const handleSortChange = (sortBy: string) => {
    setFilters((prev) => ({ ...prev, sortBy }));
  };

  return (
    <div className="min-h-screen ">
      <Header
        searchQuery={filters.searchQuery}
        onSearchChange={handleSearchChange}
      />
      <div className="px-[4%]">
        <CarouselComponent />
        <FilterSidebar
          filters={filters}
          onFiltersChange={setFilters}
          totalResults={filteredFreelancers.length}
        />
        <div className="flex">
          <FreelancerGrid
            freelancers={filteredFreelancers}
            filters={filters}
            onSortChange={handleSortChange}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}
