import { Component, NgModule, Type } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthAdminGuard } from './guards/auth-admin/auth-admin.guard';
import { AuthGuard } from './guards/auth/auth.guard';
import { MenuComponent } from './menu/menu.component';
import { CreateRecipeComponent } from './recipes/create-recipe/create-recipe.component';
import { EditRecipeComponent } from './recipes/edit-recipe/edit-recipe.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { CreateUserComponent } from './users/admin/create-user/create-user.component';
import { EditUserComponent } from './users/admin/edit-user/edit-user.component';
import { UserListComponent } from './users/admin/user-list/user-list.component';
import { LoginComponent } from './users/login/login.component';
import { RegisterComponent } from './users/register/register.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'recipes',
    pathMatch: 'full',
  },
  {
    path: 'recipes',
    component: RecipeListComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'recipes/create',
    component: CreateRecipeComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'recipes/:id',
    component: EditRecipeComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'users',
    component: UserListComponent,
    canActivate: [AuthGuard, AuthAdminGuard],
  },
  {
    path: 'users/create',
    component: CreateUserComponent,
    canActivate: [AuthGuard, AuthAdminGuard],
  },
  {
    path: 'users/:id',
    component: EditUserComponent,
    canActivate: [AuthGuard, AuthAdminGuard],
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'menus',
    component: MenuComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
