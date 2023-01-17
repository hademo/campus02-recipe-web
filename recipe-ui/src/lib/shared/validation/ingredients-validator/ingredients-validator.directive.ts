import { Directive } from '@angular/core';
import {
  AbstractControl,
  NG_VALIDATORS,
  ValidationErrors,
  Validator,
} from '@angular/forms';

@Directive({
  selector: '[ingredient]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: IngredientsValidatorDirective,
      multi: true,
    },
  ],
})
export class IngredientsValidatorDirective implements Validator {
  constructor() {}

  validate(c: AbstractControl): ValidationErrors | null {
    const validIngredients: string[] = [
      'Tomato',
      'Cucumber',
      'Bacon',
      'Cheese',
      'Meat',
      'Lettuce',
    ];

    if (c.value && validIngredients.indexOf(c.value) === -1) {
      return {
        ingredient: {
          actualValue: c.value,
          validIngredients: validIngredients,
        },
      };
    }

    return null;
  }
}
