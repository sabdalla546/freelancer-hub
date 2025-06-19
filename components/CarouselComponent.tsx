import React, { useRef, useState } from "react";

import { categories } from "@/data/freelancers";

const CarouselComponent = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [showArrow, setShowArrow] = useState(true);

  const scrollRight = () => {
    const container = containerRef.current;
    if (!container) return;

    const scrollAmount = 300;
    container.scrollBy({
      left: scrollAmount,
      behavior: "smooth",
    });

    setTimeout(() => {
      if (!container) return;
      setShowArrow(
        container.scrollWidth > container.clientWidth + container.scrollLeft
      );
    }, 300);
  };

  return (
    <div className="relative bg-white border-b border-gray-200 py-3">
      <div
        ref={containerRef}
        className="flex overflow-x-hidden space-x-6 px-4"
        onScroll={() => {
          const container = containerRef.current;
          if (!container) return;

          setShowArrow(
            container.scrollWidth > container.clientWidth + container.scrollLeft
          );
        }}
      >
        {categories.map((category, index) => (
          <div
            key={index}
            className="px-4 py-2 text-gray-700 hover:text-gray-900 hover:bg-gray-100 cursor-pointer rounded-lg transition whitespace-nowrap flex-shrink-0"
          >
            {category}
          </div>
        ))}
      </div>

      {showArrow && (
        <button
          onClick={scrollRight}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white text-gray-600 hover:text-gray-900 p-2 shadow-md rounded-l-lg"
          aria-label="Scroll right"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      )}
    </div>
  );
};

export default CarouselComponent;
