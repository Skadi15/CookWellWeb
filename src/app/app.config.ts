import { ApplicationConfig } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { RECIPE_SERVICE, recipeServiceFactory } from './recipe-services/recipe.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withComponentInputBinding()),
    provideClientHydration(),
    {provide: RECIPE_SERVICE, useFactory: recipeServiceFactory}
  ]
};
