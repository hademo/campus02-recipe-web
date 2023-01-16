import { SafeResourceUrl } from '@angular/platform-browser';

export interface Recipe {
  id: number;
  name: string;
  description: string;
  ingredients: string[];
  link: string | SafeResourceUrl;
}

export type CreateRecipe = Omit<Recipe, "id">