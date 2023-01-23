import { Component, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { Menu } from 'src/app/interfaces/menu';
import { getErrors } from 'src/lib/get-errors';
import { MenuValidatorDirective } from 'src/lib/shared/validation/menus-validator/menus-validator';

@Component({
  selector: 'app-menu-form',
  templateUrl: './menu-form.component.html',
  styleUrls: ['./menu-form.component.scss'],
  providers: [MenuValidatorDirective]
})
export class MenuFormComponent {
  @Input() menu: Menu = { name: '', imageUrl: '', entries: [] };
  @Output() deleteEntry = new EventEmitter<number>();
  @Output() addEntry = new EventEmitter();
  @Output() createMenu = new EventEmitter<Menu>();
  @ViewChild('form') public form?: NgForm;

  constructor() {

  }

  getErrors(control: NgModel) {
    return getErrors(control);
  }
}
