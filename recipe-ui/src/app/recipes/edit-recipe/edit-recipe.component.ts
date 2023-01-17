import { Component, ViewChild } from '@angular/core';
import { NgModel } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { getErrors } from '../../../lib/get-errors';
import { Recipe } from '../../../lib/recipe.dto';
import { RecipeService } from '../../services/recipe/recipe.service';
import { IngredientsFormComponent } from '../ingredients-form/ingredients-form.component';

@Component({
  selector: 'app-edit-recipe',
  templateUrl: './edit-recipe.component.html',
  styleUrls: ['./edit-recipe.component.scss'],
})
export class EditRecipeComponent {
  @ViewChild(IngredientsFormComponent)
  ingredientsFormComponent?: IngredientsFormComponent;

  recipe: Recipe = {
    id: 0,
    name: '',
    description: '',
    link: '',
    ingredients: [],
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private recipeService: RecipeService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const recipeId = params.get('id');
      if (recipeId) {
        this.recipeService.findById(+recipeId).subscribe((recipe) => {
          this.recipe = recipe;
        });
      }
    });
  }

  getErrors(control: NgModel) {
    return getErrors(control);
  }

  save() {
    console.log('Update', this.recipe);
    this.recipeService
      .update(this.recipe)
      .subscribe(() => this.router.navigate(['/', 'recipes']));
  }

  delete() {
    if (window.confirm('Möchtest du wirklich dieses Rezept löschen?')) {
      this.recipeService
        .delete(this.recipe)
        .subscribe(() => this.router.navigate(['/', 'recipes']));
    }
  }
}

