import { Component, OnInit, ViewChild } from '@angular/core';
import { NgModel } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { MenuService } from 'src/app/services/menu/menu.service';
import { getErrors } from 'src/lib/get-errors';
import { Menu } from 'src/lib/menu.dto';
import { EntriesFormComponent } from '../entry-form/entries-form.component';

@Component({
  selector: 'app-edit-menu',
  templateUrl: './edit-menu.component.html',
  styleUrls: ['./edit-menu.component.scss'],
})
export class EditMenuComponent implements OnInit {
  @ViewChild(EntriesFormComponent)
  entriesFormComponent?: EntriesFormComponent;

  menuForm: Menu = {
    id: 0,
    name: '',
    imageUrl: '',
    entries: [],
  };

  constructor(
    private menuService: MenuService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  public ngOnInit(): void {
    this.route.paramMap.subscribe((param) => {
      const menuId = Number(param.get('id'));
      this.getById(menuId);
    });
  }

  public getById(id: number) {
    this.menuService.findById(id).subscribe((data) => {
      this.menuForm = data;
    });
  }

  public updateMenu() {
    this.menuService.update(this.menuForm).subscribe(() => {
      this.router.navigateByUrl('/menus');
    });
  }

  public getErrors(control: NgModel) {
    return getErrors(control);
  }
}
