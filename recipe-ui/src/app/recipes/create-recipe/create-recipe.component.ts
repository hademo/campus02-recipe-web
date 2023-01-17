import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { Router } from '@angular/router';
import { RecipeService } from 'src/app/services/recipe/recipe.service';
import { CreateRecipe } from 'src/lib/recipe.dto';

@Component({
  selector: 'app-create-recipe',
  templateUrl: './create-recipe.component.html',
  styleUrls: ['./create-recipe.component.scss'],
})
export class CreateRecipeComponent implements OnInit {
  constructor(private recipeService: RecipeService, private router: Router) { }

  recipe: CreateRecipe = {
    name: "",
    description: "",
    ingredients: [''],
    link: ""
  }

  ngOnInit(): void { }

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
    console.log("Save", this.recipe);
    this.recipeService.save(this.recipe)
      .subscribe(() => {
        this.router.navigate(["/", "recipes"]);
      })
    return;

  }

  track(index: number, item: string) {
    return index;
  }
}
