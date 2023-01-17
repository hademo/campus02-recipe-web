import { Component, OnInit, ViewChild } from '@angular/core';
import { NgModel } from '@angular/forms';
import { Router } from '@angular/router';
import { RecipeService } from 'src/app/services/recipe.service';
import { CreateRecipe } from 'src/lib/recipe.dto';
import { getErrors } from '../../../lib/get-errors';
import { IngredientsFormComponent } from '../ingredients-form/ingredients-form.component';

@Component({
  selector: 'app-create-recipe',
  templateUrl: './create-recipe.component.html',
  styleUrls: ['./create-recipe.component.scss'],
})
export class CreateRecipeComponent implements OnInit {
  @ViewChild(IngredientsFormComponent)
  ingredientsFormComponent?: IngredientsFormComponent;

  constructor(private recipeService: RecipeService, private router: Router) {}

  recipe: CreateRecipe = {
    name: '',
    description: '',
    ingredients: [''],
    link: '',
  };

  ngOnInit(): void {}

  deleteIngredient(index: number) {
    this.recipe.ingredients.splice(index, 1);
  }

  addIngredient(e: Event) {
    e.preventDefault();
    this.recipe.ingredients.push('');
  }

  save() {
    console.log('Save', this.recipe);
    this.recipeService.save(this.recipe).subscribe(() => {
      this.router.navigate(['/', 'recipes']);
    });
    return;
  }

  getErrors(control: NgModel) {
    return getErrors(control);
  }
}
