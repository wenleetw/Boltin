import { ShieldCheck, Layers, Hammer, Settings } from "lucide-react";
import { NavLink, Product, Feature, Solution } from "./types";

export const BRAND_NAME = "Boltin";

export const NAV_LINKS: NavLink[] = [
  { name: "Home", path: "/" },
  { name: "Products", path: "/products" },
  { name: "Solutions", path: "/solutions" },
  { name: "About & Quality", path: "/about" },
  { name: "Contact", path: "/contact" },
];

export const FEATURES: Feature[] = [
  {
    title: "Complete Fastener Range",
    description: "One-stop shop for solid rivets, hollow rivets, double-caps, eyelets, and specialized binding posts.",
    icon: Layers,
  },
  {
    title: "Custom Manufacturing",
    description: "OEM/ODM services for bespoke dimensions, head styles, and material specifications.",
    icon: Settings,
  },
  {
    title: "Material Versatility",
    description: "Expert processing of Copper, Iron, Aluminum, and Stainless Steel for diverse industries.",
    icon: Hammer,
  },
  {
    title: "Reliable Quality",
    description: "Precision manufacturing with strict tolerance controls and durable finishes.",
    icon: ShieldCheck,
  },
];

export const PRODUCTS: Product[] = [
  {
    id: "p1",
    name: "Solid Steel Rivets",
    category: "Solid Rivets",
    description: "Heavy-duty solid rivets for structural applications in machinery and automotive frames.",
    image: "https://images.pexels.com/photos/162553/keys-workshop-mechanic-tools-162553.jpeg?auto=compress&cs=tinysrgb&w=600",
    specs: ["Carbon Steel / Stainless", "Flat / Round Head", "Dia: 2mm - 12mm"],
  },
  {
    id: "p2",
    name: "Double-Cap Rivets",
    category: "Rivets",
    description: "Premium finish two-piece rivets for leather goods, bags, and apparel.",
    image: "https://images.pexels.com/photos/4792078/pexels-photo-4792078.jpeg?auto=compress&cs=tinysrgb&w=600",
    specs: ["Brass / Iron", "Antique / Nickel Finish", "Smooth Cap Surface"],
  },
  {
    id: "p3",
    name: "Hollow / Semi-Tubular Rivets",
    category: "Rivets",
    description: "Lightweight fastening with controlled setting force for electronics and light assembly.",
    image: "https://images.pexels.com/photos/4491881/pexels-photo-4491881.jpeg?auto=compress&cs=tinysrgb&w=600",
    specs: ["Aluminum / Copper", "Dia: 1.5mm - 8mm", "DIN 7337 Std"],
  },
  {
    id: "p4",
    name: "Binding Posts (Chicago Screws)",
    category: "Binding",
    description: "Threaded screw posts for swatch books, menus, and architectural albums.",
    image: "https://images.pexels.com/photos/4792488/pexels-photo-4792488.jpeg?auto=compress&cs=tinysrgb&w=600",
    specs: ["Brass / Aluminum", "M3 - M6 Threads", "Various Lengths"],
  },
  {
    id: "p5",
    name: "Precision Machine Screws",
    category: "Screws",
    description: "Standard and custom micro-screws for electronics and precision instruments.",
    image: "https://images.pexels.com/photos/5691622/pexels-photo-5691622.jpeg?auto=compress&cs=tinysrgb&w=600",
    specs: ["Stainless Steel 304", "Philips / Torx", "M1.2 - M5"],
  },
  {
    id: "p6",
    name: "Brass Eyelets & Grommets",
    category: "Eyelets",
    description: "Reinforcement rings for textiles, shoes, printed circuit boards, and tags.",
    image: "https://images.pexels.com/photos/4792081/pexels-photo-4792081.jpeg?auto=compress&cs=tinysrgb&w=600",
    specs: ["Brass / Copper", "Plain / Toothed Washer", "Custom Finishes"],
  },
  {
    id: "p7",
    name: "Hex Nuts & Flange Nuts",
    category: "Nuts",
    description: "Reliable locking nuts for vibration resistance in mechanical assemblies.",
    image: "https://images.pexels.com/photos/4792480/pexels-photo-4792480.jpeg?auto=compress&cs=tinysrgb&w=600",
    specs: ["Grade 8", "Zinc Plated", "DIN 934"],
  },
  {
    id: "p8",
    name: "Flat & Spring Washers",
    category: "Washers",
    description: "Essential load distribution and locking washers.",
    image: "https://images.pexels.com/photos/4792073/pexels-photo-4792073.jpeg?auto=compress&cs=tinysrgb&w=600",
    specs: ["Steel / Nylon / Copper", "M2 - M20", "Custom Thickness"],
  },
];

export const SOLUTIONS: Solution[] = [
  {
    id: "s1",
    title: "Machinery & Metalworking",
    industry: "Manufacturing",
    description: "High-shear solid rivets and heavy-duty fasteners designed for permanent assembly of metal frameworks, automotive parts, and industrial equipment.",
    benefits: ["High Shear Strength", "Vibration Proof", "Corrosion Resistance"],
    image: "https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: "s2",
    title: "Leather Goods & Apparel",
    industry: "Fashion",
    description: "Aesthetically pleasing double-cap rivets, eyelets, and studs that serve both functional and decorative purposes for bags, belts, and denim.",
    benefits: ["Premium Plating", "Smooth Edges", "Custom Branding"],
    image: "https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: "s3",
    title: "Stationery & Binding",
    industry: "Stationery",
    description: "Specialized binding posts (Chicago screws) and eyelets for sample books, menus, archival folders, and office supply manufacturing.",
    benefits: ["Re-usable", "Various Lengths", "Clean Finish"],
    image: "https://images.pexels.com/photos/6373305/pexels-photo-6373305.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: "s4",
    title: "Electronics & PCB",
    industry: "Electronics",
    description: "Micro-screws, spacers, and hollow rivets for delicate circuit board mounting and consumer electronics casing.",
    benefits: ["Non-Magnetic Options", "Micro Tolerances", "Automated Feeding"],
    image: "https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: "s5",
    title: "Furniture Hardware",
    industry: "Furniture",
    description: "Connector bolts, dowels, and decorative caps for knock-down furniture and cabinetry assembly.",
    benefits: ["Easy Assembly", "High Load Bearing", "Cost Effective"],
    image: "https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
];
