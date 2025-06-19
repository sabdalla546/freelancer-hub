import {
  FacebookIcon,
  TwitterIcon,
  InstagramIcon,
  LinkedinIcon,
  Globe,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  categories,
  forClients,
  company,
  forFreelancers,
  businessSolutions,
} from "@/data/freelancers";

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Categories */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Categories</h3>
            <ul className="space-y-2">
              {categories.map((category, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-sm text-gray-600 hover:text-green-500 transition-colors"
                  >
                    {category}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* For Clients */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">For Clients</h3>
            <ul className="space-y-2">
              {forClients.map((item, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-sm text-gray-600 hover:text-green-500 transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* For Freelancers */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">
              For Freelancers
            </h3>
            <ul className="space-y-2">
              {forFreelancers.map((item, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-sm text-gray-600 hover:text-green-500 transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Company</h3>
            <ul className="space-y-2">
              {company.map((item, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-sm text-gray-600 hover:text-green-500 transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Business Solutions */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">
              Business Solutions
            </h3>
            <ul className="space-y-2">
              {businessSolutions.map((item, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-sm text-gray-600 hover:text-green-500 transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
        </div>
        <div className="w-full flex items-center space-x-3 justify-end">
          <Button variant="ghost" size="sm" className="p-2">
            <FacebookIcon className="h-4 w-4 text-gray-500 hover:text-blue-500" />
          </Button>
          <Button variant="ghost" size="sm" className="p-2">
            <TwitterIcon className="h-4 w-4 text-gray-500 hover:text-blue-400" />
          </Button>
          <Button variant="ghost" size="sm" className="p-2">
            <InstagramIcon className="h-4 w-4 text-gray-500 hover:text-pink-500" />
          </Button>
          <Button variant="ghost" size="sm" className="p-2">
            <LinkedinIcon className="h-4 w-4 text-gray-500 hover:text-blue-600" />
          </Button>
        </div>
        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col lg:flex-row items-center justify-between space-y-4 lg:space-y-0">
            {/* Logo and Copyright */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">F</span>
                </div>
                <span className="ml-2 text-xl font-bold text-gray-900">
                  FreelanceHub
                </span>
              </div>
              <span className="text-sm text-gray-500">
                © 2024 FreelanceHub. All rights reserved.
              </span>
            </div>

            {/* Language Selector and Social Links */}
            <div className="flex items-center">
              <div className="flex items-center">
                <Globe className="h-4 w-4 text-gray-500" />
                <Select defaultValue="english">
                  <SelectTrigger className="w-32 border-2 bg-transparent">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="english">English</SelectItem>
                    <SelectItem value="spanish">Arabic</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
