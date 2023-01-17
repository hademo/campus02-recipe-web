import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { getErrors } from '../../../lib/get-errors';

@Component({
  selector: 'app-ingredients-form',
  templateUrl: './ingredients-form.component.html',
  styleUrls: ['./ingredients-form.component.scss'],
})
export class IngredientsFormComponent {
  @ViewChild('form') public form?: NgForm;

  @Input() ingredients: string[] = [];
  @Output() ingredientsChange = new EventEmitter<string[]>();

  deleteIngredient(index: number) {
    const ingredients = [...this.ingredients];
    ingredients.splice(index, 1);
    this.ingredientsChange.emit(ingredients);
  }

  addIngredient(event: Event) {
    event.preventDefault();
    const ingredients = [...this.ingredients, ''];
    this.ingredientsChange.emit(ingredients);
  }

  updateIngredient(event: any, ingredientIndex: number) {
    const ingredients = [...this.ingredients];
    ingredients[ingredientIndex] = event;
    this.ingredientsChange.emit(ingredients);
  }

  track(index: number, item: string) {
    return index;
  }

  getErrors(control: NgModel) {
    return getErrors(control);
  }

  get invalid() {
    return this.form?.invalid;
  }
}
