import { LucideIcon } from "lucide-react";

export interface NavLink {
  name: string;
  path: string;
}

export interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  image: string;
  specs: string[];
}

export interface Feature {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface Solution {
  id: string;
  title: string;
  industry: string;
  description: string;
  benefits: string[];
  image: string;
}
