import { Component, Inject } from '@angular/core';
import { RECIPE_SERVICE, RecipeService } from '../recipe-services/recipe.service';
import { FileRecipeService } from '../recipe-services/file-recipe.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-load-recipes',
  standalone: true,
  imports: [],
  templateUrl: './load-recipes.component.html',
  styleUrl: './load-recipes.component.css'
})
export class LoadRecipesComponent {
  constructor(@Inject(RECIPE_SERVICE) private _recipeService: RecipeService, private _router: Router) {
    if (!(_recipeService instanceof FileRecipeService)) {
      throw new Error('Only FileRecipeService currently supported');
    }
  }

  onFileSelected(event: any) {
    (this._recipeService as FileRecipeService).recipeFile = event.target.files[0];
    this._router.navigateByUrl('/recipes');
  }
}
