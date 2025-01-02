import { z } from "zod";
import { CategoriesAPIResponseSchema, DrinkAPIResponse, DrinksAPIResponse, RecipeAPIResponseSchema, SearchFilterSchema } from './../schemas/recipes-schema';

export type CategoriesP = z.infer<typeof CategoriesAPIResponseSchema>
export type SearchFilter = z.infer<typeof SearchFilterSchema>
export type Drinks = z.infer<typeof DrinksAPIResponse>
export type DrinkP = z.infer<typeof DrinkAPIResponse>
export type RecipeP = z.infer<typeof RecipeAPIResponseSchema>