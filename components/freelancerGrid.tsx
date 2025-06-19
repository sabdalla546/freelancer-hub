"use client";

import { useState, useMemo } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import FreelancerCard from "./freelancerCard";
import { Freelancer, FilterState } from "@/types/freelancer";
import { sortOptions } from "@/data/freelancers";

interface FreelancerGridProps {
  freelancers: Freelancer[];
  filters: FilterState;
  onSortChange: (sortBy: string) => void;
}

export default function FreelancerGrid({
  freelancers,
  filters,
}: FreelancerGridProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const sortedFreelancers = useMemo(() => {
    let sorted = [...freelancers];

    switch (filters.sortBy) {
      case "rating_high":
        sorted.sort((a, b) => b.rating - a.rating);
        break;
      case "rating_low":
        sorted.sort((a, b) => a.rating - b.rating);
        break;
      case "price_high":
        sorted.sort((a, b) => b.price - a.price);
        break;
      case "price_low":
        sorted.sort((a, b) => a.price - b.price);
        break;
      default:
        // Keep original order for relevance
        break;
    }

    return sorted;
  }, [freelancers, filters.sortBy]);

  const totalPages = Math.ceil(sortedFreelancers.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedFreelancers = sortedFreelancers.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
    <div className="flex-1 p-6">
      {/* Header with Results Count and Sort */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 mb-1">
            {sortedFreelancers.length} Results
          </h1>
        </div>
      </div>

      {/* Freelancer Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
        {paginatedFreelancers.map((freelancer) => (
          <FreelancerCard key={freelancer.id} freelancer={freelancer} />
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
            disabled={currentPage === 1}
            className="flex items-center space-x-1"
          >
            <ChevronLeft className="h-4 w-4" />
            <span>Previous</span>
          </Button>

          <div className="flex items-center space-x-1">
            {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
              const pageNum = i + 1;
              return (
                <Button
                  key={pageNum}
                  variant={currentPage === pageNum ? "default" : "outline"}
                  size="sm"
                  onClick={() => setCurrentPage(pageNum)}
                  className="w-10 h-10 p-0"
                >
                  {pageNum}
                </Button>
              );
            })}
          </div>

          <Button
            variant="outline"
            size="sm"
            onClick={() =>
              setCurrentPage(Math.min(totalPages, currentPage + 1))
            }
            disabled={currentPage === totalPages}
            className="flex items-center space-x-1"
          >
            <span>Next</span>
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      )}
    </div>
  );
}
