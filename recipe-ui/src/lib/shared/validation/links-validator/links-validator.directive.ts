import { Directive } from '@angular/core';
import {
  AbstractControl,
  NG_VALIDATORS,
  ValidationErrors,
  Validator,
} from '@angular/forms';

@Directive({
  selector: '[link]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: LinksValidatorDirective,
      multi: true,
    },
  ],
})
export class LinksValidatorDirective implements Validator {
  constructor() {}

  validate(c: AbstractControl): ValidationErrors | null {
    if (c.value && !this.isValidUrl(c.value)) {
      return {
        url: {
          invalidUrl: c.value,
        },
      };
    }

    return null;
  }

  public isValidUrl = (url: string): boolean => {
    try {
      new URL(url);
      return true;
    } catch (err) {
      return false;
    }
  };
}
