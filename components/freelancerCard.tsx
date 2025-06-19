import { Star, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Freelancer } from "@/types/freelancer";

interface FreelancerCardProps {
  freelancer: Freelancer;
}

export default function FreelancerCard({ freelancer }: FreelancerCardProps) {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${
          i < Math.floor(rating)
            ? "text-yellow-400 fill-current"
            : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-0 shadow-md">
      <CardContent className="p-0">
        {/* Image Section */}
        <div className="relative overflow-hidden rounded-t-lg">
          <img
            src={freelancer.image}
            alt={freelancer.name}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute top-3 right-3">
            <Button
              variant="ghost"
              size="sm"
              className="w-8 h-8 rounded-full bg-white/80 hover:bg-white p-0"
            >
              <Heart className="h-4 w-4 text-gray-600" />
            </Button>
          </div>
          <div className="absolute bottom-3 left-3">
            <Badge
              variant="secondary"
              className="bg-white/90 text-gray-700 font-medium"
            >
              {freelancer.level}
            </Badge>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-5">
          {/* Profile Info */}
          <div className="flex items-start space-x-3 mb-3">
            <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
              <span className="text-green-600 font-semibold text-sm">
                {freelancer.name.charAt(0)}
              </span>
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold text-gray-900 truncate">
                {freelancer.name}
              </h3>
            </div>
          </div>

          {/* Rating */}
          <div className="flex items-center justify-between space-x-2 mb-3">
            <p className="text-sm text-gray-600">{freelancer.level}</p>
            <div className="flex items-center flex-nowrap">
              <div className="flex">{renderStars(freelancer.rating)}</div>
              <span className="font-medium text-gray-900">
                {freelancer.rating}
              </span>
              <span className="text-sm text-gray-500">
                ({freelancer.reviewCount})
              </span>
            </div>
          </div>
          <div className="py-2">
            <p className="text-sm text-gray-600">{freelancer.role}</p>
          </div>

          {/* Price and Action */}
          <div className="flex items-center justify-start gap-2 py-2">
            <div>
              <span className="text-sm text-gray-600">From </span>
            </div>
            <div className="font-semibold  text-gray-900">
              ${freelancer.price.toFixed(2)}
            </div>
          </div>
          <Button className="w-full bg-green-500 hover:bg-green-600 text-white px-6 py-4 rounded-lg transition-colors duration-200">
            See More
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
