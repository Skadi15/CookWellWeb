import { RecipeService } from './recipe.service';
import { Recipe } from '../recipe';

export class FileRecipeService implements RecipeService {
  private _recipeFile: File | undefined;

  set recipeFile(file: File) {
    this._recipeFile = file;
  }

  async fetch(): Promise<Recipe[]> {
    if (!this._recipeFile) {
      console.warn('Attempted to fetch recipes without setting recipe file.');
      return [];
    }

    return JSON.parse(await this._recipeFile.text());
  }
  
  push(recipes: Recipe[]): void {
    throw new Error('Method not implemented.');
  }
}
