import { InjectionToken } from "@angular/core";
import { Recipe } from "../recipe";
import { FileRecipeService } from "./file-recipe.service";

export interface RecipeService {
    fetch(): Promise<Recipe[]>;
    push(recipes: Recipe[]): void;
}

export const RECIPE_SERVICE = new InjectionToken<RecipeService>("RecipeService")

export const recipeServiceFactory = () => new FileRecipeService()