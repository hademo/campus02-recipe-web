import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditRecipeComponent } from './recipes/edit-recipe/edit-recipe.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'recipes',
    pathMatch: 'full',
  },
  {
    path: 'recipes',
    component: RecipeListComponent,
  },
  {
    path: 'recipes/:id',
    component: EditRecipeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
