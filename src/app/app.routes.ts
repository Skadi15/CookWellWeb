import { Routes } from '@angular/router';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { LoadRecipesComponent } from './load-recipes/load-recipes.component';

export const routes: Routes = [
    {path: 'recipes', component: RecipeListComponent},
    {path: '', component: LoadRecipesComponent, pathMatch: 'full'}
];
