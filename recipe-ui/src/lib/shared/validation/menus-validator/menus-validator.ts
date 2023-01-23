import { Directive, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';
import { Menu } from 'src/app/interfaces/menu';

@Directive({
  selector: '[menuValidator]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: MenuValidatorDirective,
      multi: true,
    },
  ],
})
export class MenuValidatorDirective implements Validator {
  @Input() menu: Menu;

  pattern = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/;


  constructor() {
    this.menu = { name: '', imageUrl: '', entries: [] };
  }

  validate(c: AbstractControl): ValidationErrors | null {

    if (!this.menu.name) {
      return {
        name: {
          required: true,
        },
      };
    }
    if (this.menu.name.length < 5) {
      return {
        name: {
          minlength: true,
        },
      };
    }
    if (!this.menu.imageUrl) {
      return {
        imageUrl: {
          required: true,
        },
      };
    }

    if (!this.pattern.test(this.menu.imageUrl)) {
      return {
        imageUrl: {
          invalid: true,
        },
      };
    }
    

    if (!this.menu.entries.length) {
      return {
        entries: {
          required: true,
        },
      };
    }

    return null;
  }
}
