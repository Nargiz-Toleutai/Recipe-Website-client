import { Category } from "../CategoryItem/types";

export interface Recipe {
  id: number;
  name: string;
  serves?: number;
  preptime?: number;
  image_URL?: string;
  comments?: Comment[];
  categories?: Category[];
  instructions?: string;
  ingredients?: string;
}

export interface Comment {
  id: number;
  name: string;
  review: string;
  createdAt: Date;
  rating: number;
}
