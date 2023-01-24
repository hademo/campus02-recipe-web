import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';

import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatListModule } from '@angular/material/list';
import { IngredientsValidatorDirective } from '../lib/shared/validation/ingredients-validator/ingredients-validator.directive';
import { CreateRecipeComponent } from './recipes/create-recipe/create-recipe.component';
import { EditRecipeComponent } from './recipes/edit-recipe/edit-recipe.component';
import { RegisterComponent } from './users/register/register.component';
import { LoginComponent } from './users/login/login.component';
import { CreateUserComponent } from './users/admin/create-user/create-user.component';
import { EditUserComponent } from './users/admin/edit-user/edit-user.component';
import { UserListComponent } from './users/admin/user-list/user-list.component';
import { DeleteUserDialogComponent } from './users/admin/delete-user-dialog/delete-user-dialog.component';
import { IngredientsFormComponent } from './recipes/ingredients-form/ingredients-form.component';
import { LinksValidatorDirective } from 'src/lib/shared/validation/links-validator/links-validator.directive';
import { LinksFormComponent } from './users/admin/links-form/links-form.component';
import { EmailValidatorDirective } from 'src/lib/shared/validation/email-validator/email-validator.directive';
import { CreateMenuComponent } from './menus/create-menu/create-menu.component';
import { DeleteMenuDialogComponent } from './menus/delete-menu-dialog/delete-menu-dialog.component';
import { EditMenuComponent } from './menus/edit-menu/edit-menu.component';
import { MenuListComponent } from './menus/menu-list/menu-list.component';
import { EntriesFormComponent } from './menus/entry-form/entries-form.component';

@NgModule({
  declarations: [
    AppComponent,
    RecipeListComponent,
    CreateRecipeComponent,
    EditRecipeComponent,
    RegisterComponent,
    LoginComponent,
    CreateUserComponent,
    EditUserComponent,
    UserListComponent,
    DeleteUserDialogComponent,
    IngredientsFormComponent,
    IngredientsValidatorDirective,
    LinksFormComponent,
    LinksValidatorDirective,
    EmailValidatorDirective,
    CreateMenuComponent,
    EditMenuComponent,
    MenuListComponent,
    DeleteMenuDialogComponent,
    EntriesFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    MatGridListModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatIconModule,
    MatChipsModule,
    BrowserModule,
    MatToolbarModule,
    MatMenuModule,
    MatTableModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatOptionModule,
    MatDialogModule,
    MatListModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
