import { NgModel } from '@angular/forms';

export function getErrors(control: NgModel) {
  const errors = [];

  if (control.invalid && (control.dirty || control.touched)) {
    if (control.hasError('required'))
      errors.push('Dieses Feld ist ein Pflichtfeld');

    if (control.hasError('minlength')) errors.push('Dieses Feld ist zu kurz');

    if (control.hasError('maxlength')) errors.push('Dieses Feld ist zu lang');

    if (control.hasError('pattern'))
      errors.push(
        `Dieses Feld muss folgendem Pattern entsprechen: ${
          control.getError('pattern').requiredPattern
        }`
      );

    if (control.hasError('ingredient')) {
      errors.push(
        `Erlaubte Werte: ${control
          .getError('ingredient')
          ?.validIngredients.join(', ')}`
      );
    }
  }

  return errors.join('. ');
}
