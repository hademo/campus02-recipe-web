import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Menu } from 'src/app/interfaces/menu';

@Component({
  selector: 'app-menu-form',
  templateUrl: './menu-form.component.html',
  styleUrls: ['./menu-form.component.scss']
})
export class MenuFormComponent {
  @Input() menu: Menu = { name: '', imageUrl: '', entries: [] };
  @Output() deleteEntry = new EventEmitter<number>();
  @Output() addEntry = new EventEmitter();
  @Output() createMenu = new EventEmitter<Menu>();

  constructor() {

  }
}
