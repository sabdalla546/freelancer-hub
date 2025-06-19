"use client";

import { ArrowRight, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { sortOptions as importedSortOptions } from "@/data/freelancers";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { categories, deliveryTimes } from "@/data/freelancers";
import { useState } from "react";

interface FilterState {
  searchQuery: string;
  category: string;
  minBudget: number;
  maxBudget: number;
  deliveryTime: string;
  location: string;
  sortBy: string;
  skills: string;
}

interface FilterSidebarProps {
  filters: FilterState;
  onFiltersChange: (filters: FilterState) => void;
  totalResults: number;
}

const skills = [
  "UI/UX Design",
  "Web Development",
  "Graphic Design",
  "Marketing",
  "Writing",
];

export default function FilterSidebar({
  filters,
  onFiltersChange,
  totalResults,
}: FilterSidebarProps) {
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  const updateFilter = (key: keyof FilterState, value: string | number) => {
    onFiltersChange({
      ...filters,
      [key]: value,
    });
  };

  const clearFilters = () => {
    onFiltersChange({
      searchQuery: "",
      category: "All Categories",
      minBudget: 0,
      maxBudget: 1000,
      deliveryTime: "Any Time",
      location: "",
      sortBy: "relevance",
      skills: "All Skills",
    });
  };

  return (
    <div className="w-full bg-white border-b border-gray-200 py-4">
      {/* Top row: Results heading and buttons */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-4 px-4 gap-4">
        <h2 className="text-lg md:text-xl font-bold text-gray-900">
          {totalResults} Results{" "}
          {filters.category ? (
            <>
              for (
              <span className="font-bold">
                {filters.category === "Design"
                  ? "UI/UX Designer"
                  : filters.category}
              </span>
              )
            </>
          ) : (
            "(All Categories)"
          )}
        </h2>

        <div className="flex items-center gap-2 w-full md:w-auto">
          <Button
            variant="outline"
            size="sm"
            className="md:hidden"
            onClick={() => setShowMobileFilters(!showMobileFilters)}
          >
            {showMobileFilters ? "Hide Filters" : "Show Filters"}
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={clearFilters}
            className="text-green-500 hover:text-green-600"
          >
            Clear All
          </Button>
        </div>
      </div>

      {/* Desktop filters - hidden on mobile */}
      <div className="hidden md:flex flex-col gap-4 px-4">
        {/* First row of filters */}
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <Select
              value={filters.category}
              onValueChange={(value) => updateFilter("category", value)}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="flex-1">
            <Select
              value={filters.skills}
              onValueChange={(value) => updateFilter("skills", value)}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select skills" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="All Skills">All Skills</SelectItem>
                {skills.map((skill) => (
                  <SelectItem key={skill} value={skill}>
                    {skill}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="flex-1">
            <Input
              type="number"
              placeholder="Max budget"
              value={filters.maxBudget || ""}
              onChange={(e) =>
                updateFilter("maxBudget", Number(e.target.value))
              }
            />
          </div>

          <div className="flex-1">
            <Select
              value={filters.deliveryTime}
              onValueChange={(value) => updateFilter("deliveryTime", value)}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Delivery time" />
              </SelectTrigger>
              <SelectContent>
                {deliveryTimes.map((time) => (
                  <SelectItem key={time} value={time}>
                    {time}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Second row of filters */}
        <div className="flex flex-col md:flex-row justify-between">
          <div className="w-full md:w-[30%]">
            <div className="relative">
              <Input
                type="text"
                placeholder="Search by Location"
                value={filters.location}
                onChange={(e) => updateFilter("location", e.target.value)}
                className="w-full pl-10"
              />
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                <Search className="h-4 w-4 text-gray-500" />
              </div>
              <button
                type="button"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 h-6 w-6 flex items-center justify-center rounded-sm bg-green-600"
              >
                <ArrowRight className="h-4 w-4 text-white" />
              </button>
            </div>
          </div>

          <div className="w-full md:w-[15%]">
            {" "}
            {/* Increased width for longer options */}
            <Select
              value={filters.sortBy}
              onValueChange={(value) => updateFilter("sortBy", value)}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                {importedSortOptions.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      {/* Mobile filters - shown when toggled */}
      {showMobileFilters && (
        <div className="md:hidden flex flex-col gap-4 px-4">
          <Select
            value={filters.category}
            onValueChange={(value) => updateFilter("category", value)}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="All Categories">All Categories</SelectItem>
              {categories.map((category) => (
                <SelectItem key={category} value={category}>
                  {category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select
            value={filters.skills}
            onValueChange={(value) => updateFilter("skills", value)}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select skills" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="All Skills">All Skills</SelectItem>
              {skills.map((skill) => (
                <SelectItem key={skill} value={skill}>
                  {skill}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Input
            type="number"
            placeholder="Max budget"
            value={filters.maxBudget || ""}
            onChange={(e) => updateFilter("maxBudget", Number(e.target.value))}
          />

          <Select
            value={filters.deliveryTime}
            onValueChange={(value) => updateFilter("deliveryTime", value)}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Delivery time" />
            </SelectTrigger>
            <SelectContent>
              {deliveryTimes.map((time) => (
                <SelectItem key={time} value={time}>
                  {time}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <div className="relative">
            <Input
              type="text"
              placeholder="Search by Location"
              value={filters.location}
              onChange={(e) => updateFilter("location", e.target.value)}
              className="w-full pl-10"
            />
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
              <Search className="h-4 w-4 text-gray-500" />
            </div>
            <button
              type="button"
              className="absolute right-2 top-1/2 transform -translate-y-1/2 h-8 w-8 flex items-center justify-center rounded-sm bg-green-600"
            >
              <ArrowRight className="h-4 w-4 text-white" />
            </button>
          </div>

          <Select
            value={filters.sortBy}
            onValueChange={(value) => updateFilter("sortBy", value)}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              {importedSortOptions.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      )}
    </div>
  );
}
