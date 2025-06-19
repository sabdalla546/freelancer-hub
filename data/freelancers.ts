import { Freelancer } from "@/types/freelancer";

export const freelancers: Freelancer[] = [
  {
    id: "1",
    name: "Kaviya Periya",
    role: "UI/UX Designer",
    level: "Level 2",
    rating: 4.8,
    reviewCount: 124,
    price: 25.0,
    image:
      "https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=400",
    category: "Design",
    deliveryTime: 3,
    location: "India",
    skills: ["UI Design", "UX Research", "Figma"],
  },
  {
    id: "2",
    name: "Alex Thompson",
    role: "Frontend Developer",
    level: "Level 3",
    rating: 4.9,
    reviewCount: 89,
    price: 45.0,
    image:
      "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400",
    category: "Development",
    deliveryTime: 5,
    location: "USA",
    skills: ["React", "TypeScript", "Next.js"],
  },
  {
    id: "3",
    name: "Sofia Rodriguez",
    role: "Graphic Designer",
    level: "Level 2",
    rating: 4.7,
    reviewCount: 156,
    price: 30.0,
    image:
      "https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=400",
    category: "Design",
    deliveryTime: 2,
    location: "Spain",
    skills: ["Adobe Creative Suite", "Branding", "Print Design"],
  },
  {
    id: "4",
    name: "James Wilson",
    role: "Content Writer",
    level: "Level 1",
    rating: 4.6,
    reviewCount: 78,
    price: 20.0,
    image:
      "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400",
    category: "Writing",
    deliveryTime: 1,
    location: "UK",
    skills: ["SEO Writing", "Copywriting", "Blog Writing"],
  },
  {
    id: "5",
    name: "Maria Santos",
    role: "Digital Marketer",
    level: "Level 3",
    rating: 4.9,
    reviewCount: 203,
    price: 40.0,
    image:
      "https://images.pexels.com/photos/3785074/pexels-photo-3785074.jpeg?auto=compress&cs=tinysrgb&w=400",
    category: "Marketing",
    deliveryTime: 7,
    location: "Brazil",
    skills: ["Social Media", "PPC", "Analytics"],
  },
  {
    id: "6",
    name: "David Chen",
    role: "Mobile App Developer",
    level: "Level 3",
    rating: 4.8,
    reviewCount: 167,
    price: 50.0,
    image:
      "https://images.pexels.com/photos/2182975/pexels-photo-2182975.jpeg?auto=compress&cs=tinysrgb&w=400",
    category: "Development",
    deliveryTime: 10,
    location: "Singapore",
    skills: ["React Native", "iOS", "Android"],
  },
  {
    id: "7",
    name: "Emily Davis",
    role: "Video Editor",
    level: "Level 2",
    rating: 4.7,
    reviewCount: 95,
    price: 35.0,
    image:
      "https://i.pinimg.com/736x/a8/0a/cf/a80acf16d26543b5192e88dc6d862e0e.jpg",
    category: "Video & Animation",
    deliveryTime: 4,
    location: "Canada",
    skills: ["After Effects", "Premiere Pro", "Motion Graphics"],
  },
  {
    id: "8",
    name: "Ravi Patel",
    role: "Data Analyst",
    level: "Level 2",
    rating: 4.8,
    reviewCount: 132,
    price: 38.0,
    image:
      "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=400",
    category: "Data",
    deliveryTime: 6,
    location: "India",
    skills: ["Python", "SQL", "Tableau"],
  },
];

export const categories = [
  "All Categories",
  "Design",
  "Development",
  "Writing",
  "Marketing",
  "Video & Animation",
  "Data",
  "Photography",
  "Automation",
  "Ai Service",
];
export const forClients = [
  "How to Hire",
  "Talent Marketplace",
  "Project Catalog",
  "Enterprise",
  "Payroll Services",
  "Direct Contracts",
  "Hire Worldwide",
  "Hire in the USA",
];

export const forFreelancers = [
  "How to Find Work",
  "Direct Contracts",
  "Find Freelance Jobs Worldwide",
  "Win Work with Ads",
  "Exclusive Resources",
  "English Test",
  "Get Verified",
];

export const company = [
  "About Us",
  "Leadership",
  "Investor Relations",
  "Careers",
  "Our Impact",
  "Press",
  "Contact Us",
  "Trust & Safety",
];

export const businessSolutions = [
  "Freelancer Pro",
  "Project Management",
  "CRM Integration",
  "Business Solutions",
  "Enterprise Solutions",
];
export const deliveryTimes = [
  "Any Time",
  "Express 24H",
  "Up to 3 days",
  "Up to 7 days",
  "Anytime",
];

export const sortOptions = [
  { value: "rating_high", label: "Most Rated" },
  { value: "rating_low", label: "Lowest Rated" },
  { value: "price_high", label: "Highest Price" },
  { value: "price_low", label: "Lowest Price" },
];
