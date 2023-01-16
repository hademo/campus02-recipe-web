import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Recipe } from '../../../lib/recipe.dto';
import { RecipeService } from '../../services/recipe.service';

@Component({
  selector: 'app-edit-recipe',
  templateUrl: './edit-recipe.component.html',
  styleUrls: ['./edit-recipe.component.scss'],
})
export class EditRecipeComponent {
  recipeId?: number;
  recipe: Recipe = {
    id: 0,
    name: "",
    description: "",
    link: "",
    ingredients: []
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private recipeService: RecipeService,
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const recipeId = params.get('id');
      if (recipeId) {
        this.recipeId = +recipeId;
        this.recipeService.findById(this.recipeId).subscribe((recipe) => {
          this.recipe = recipe;
        });
      }
    });
  }

  deleteIngredient(index: number) {
    this.recipe.ingredients.splice(index, 1);
  }

  addIngredient(e: Event) {
    e.preventDefault();
    this.recipe.ingredients.push("");
  }

  getErrors(control: NgModel) {
    const errors = [];

    if (control.invalid && (control.dirty || control.touched)) {
      if (control.hasError("required"))
        errors.push("Dieses Feld ist ein Pflichtfeld")

      if (control.hasError("minlength"))
        errors.push("Dieses Feld ist zu kurz")

      if (control.hasError("maxlength"))
        errors.push("Dieses Feld ist zu lang")

      if (control.hasError("pattern"))
        errors.push(`Dieses Feld muss folgendem Pattern entsprechen: ${control.getError("pattern").requiredPattern}`)
    }

    return errors.join(". ");
  }

  save() {
    console.log("Update", this.recipe);
    this.recipeService.update(this.recipe)
      .subscribe(() => this.router.navigate(["/", "recipes"]));
  }

  delete() {
    if (window.confirm("Möchtest du wirklich dieses Rezept löschen?")) {
      this.recipeService.delete(this.recipe)
        .subscribe(() => this.router.navigate(["/", "recipes"]));
    }
  }

  track(index: number, item: string) {
    return index;
  }
}