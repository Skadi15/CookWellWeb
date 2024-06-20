import { Component } from '@angular/core';
import { RecipeBookService } from '../recipe-book.service';
import { Recipe } from '../recipe';

@Component({
    selector: 'app-recipe-list',
    standalone: true,
    imports: [],
    templateUrl: './recipe-list.component.html',
    styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent {
  private _focusedRecipe: Recipe | null = null;
  private _recipeBookInitialized: boolean = false;

  constructor(private _recipeBook: RecipeBookService) { }

  get recipes(): string[] {
    if (!this._recipeBookInitialized) {
      this._recipeBook.refresh().then(() => console.log('Recipe book initialized'));
    }
    return this._recipeBook.getRecipeNames();
  }

  get focusedRecipe(): Recipe | null {
    return this._focusedRecipe;
  }

  set focusedRecipe(recipe: string | null) {
    this._focusedRecipe = recipe ? this._recipeBook.getRecipe(recipe) : null;
  }

  onRecipeSelected(recipe: string) {
    this.focusedRecipe = recipe;
  }
}
