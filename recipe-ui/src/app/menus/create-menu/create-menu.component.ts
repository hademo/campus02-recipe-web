import { Component, ViewChild } from '@angular/core';
import { NgModel } from '@angular/forms';
import { Router } from '@angular/router';
import { MenuService } from 'src/app/services/menu/menu.service';
import { getErrors } from 'src/lib/get-errors';
import { CreateMenu } from 'src/lib/menu.dto';
import { EntriesFormComponent } from '../entry-form/entries-form.component';

@Component({
  selector: 'app-create-menu',
  templateUrl: './create-menu.component.html',
  styleUrls: ['./create-menu.component.scss'],
})
export class CreateMenuComponent {
  @ViewChild(EntriesFormComponent)
  entriesFormComponent?: EntriesFormComponent;

  menuForm: CreateMenu = {
    name: '',
    imageUrl: '',
    entries: [],
  };

  constructor(private menuService: MenuService, private router: Router) {}

  public createMenu() {
    this.menuService.save(this.menuForm).subscribe(() => {
      this.router.navigateByUrl('/menus');
    });
  }

  public getErrors(control: NgModel) {
    return getErrors(control);
  }
}
