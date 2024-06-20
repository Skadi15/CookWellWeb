import { Inject, Injectable } from '@angular/core';
import { RECIPE_SERVICE, RecipeService } from './recipe-services/recipe.service';
import { Recipe } from './recipe';

@Injectable({
  providedIn: 'root'
})
export class RecipeBookService {
  private readonly _recipes: Map<string, Recipe> = new Map();
  private readonly _tags: Map<string, Set<string>> = new Map();

  constructor(@Inject(RECIPE_SERVICE) private _recipeService: RecipeService) {}

  async refresh(): Promise<void> {
    this.updateRecipes(await this._recipeService.fetch());
  }

  save(): void {
    this._recipeService.push(Array.from(this._recipes.values()));
  }

  updateRecipes(recipes: Recipe[]): void {
    recipes.forEach(recipe => this.updateRecipe(recipe));
  }

  updateRecipe(recipe: Recipe): void {
    this._recipes.set(recipe.name, recipe);
    for (const tag of recipe.tags) {
      if (!this._tags.has(tag)) {
        this._tags.set(tag, new Set());
      }
      this._tags.get(tag)!.add(recipe.name);
    }
  }

  deleteRecipe(recipeName: string): void {
    if (this._recipes.has(recipeName)) {
      const recipe = this._recipes.get(recipeName)!;
      recipe.tags.forEach(tag => this._tags.get(tag)!.delete(recipeName));
      this._recipes.delete(recipeName);
    }
  }

  getRecipe(recipeName: string): Recipe | null {
    return this._recipes.has(recipeName) ? this._recipes.get(recipeName)! : null;
  }

  getRecipesWithTags(tags: string[]): string[] {
    const recipeNames: Set<string> = new Set();
    for (const tag of tags) {
      this._tags.get(tag)!.forEach(recipeNames.add);
    }
    return Array.from(recipeNames);
  }

  getRecipeNames(): string[] {
    return Array.from(this._recipes.keys());
  }
}
