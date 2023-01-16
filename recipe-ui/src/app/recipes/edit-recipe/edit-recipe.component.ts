import { Component } from '@angular/core';
import { FormArray, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Recipe } from '../../../lib/recipe.dto';
import { RecipeService } from '../../services/recipe.service';

@Component({
  selector: 'app-edit-recipe',
  templateUrl: './edit-recipe.component.html',
  styleUrls: ['./edit-recipe.component.scss'],
})
export class EditRecipeComponent {
  recipeId?: number;
  recipe?: Recipe;

  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeService,
    private fb: FormBuilder
  ) {}

  editForm = this.fb.nonNullable.group({
    id: [0],
    name: [''],
    description: [''],
    ingredients: this.fb.array<string>(['']),
    link: [''],
  });

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const recipeId = params.get('id');
      if (recipeId) {
        this.recipeId = +recipeId;
        this.recipeService.findById(this.recipeId).subscribe((recipe) => {
          this.recipe = recipe;
          this.editForm.controls.ingredients = new FormArray(
            recipe.ingredients.map((ingredient) => this.fb.control(ingredient))
          );
          this.editForm.setValue({
            id: this.recipe.id,
            name: this.recipe.name,
            description: this.recipe.description,
            ingredients: this.recipe.ingredients,
            link: this.recipe.link as string,
          });
        });
      }
    });
  }

  get ingredients() {
    return this.editForm.controls['ingredients'] as FormArray;
  }

  deleteIngredient(lessonIndex: number) {
    this.ingredients.removeAt(lessonIndex);
  }

  addIngredient() {
    const ingredientForm = this.fb.control(['xd']);
    this.ingredients.push(ingredientForm);
  }
}
