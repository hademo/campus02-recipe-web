import { Component, ViewChild, ElementRef } from '@angular/core';
import { Menu } from '../interfaces/menu';
import { MenuService } from '../services/menu/menu.service';
import { MenuValidator } from 'src/lib/shared/validation/menus-validator/menus-validator';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  @ViewChild('name') nameInput: ElementRef | null;
  @ViewChild('imageUrl') imageUrlInput: ElementRef | null;
  @ViewChild('filterInput') filterInput: ElementRef | null = null;;

  menus: Menu[] = [];
  menu: any = { name: '', imageUrl: '', entries: [] };

  displayedColumns = ['id', 'name', 'imageUrl', 'edit', 'delete'];
  filterValue: string = "";
  
  dataSource = new MatTableDataSource(this.menus);

  name : string | null = null;

  constructor(private menuService: MenuService, private validator: MenuValidator) {
    this.nameInput = null;
    this.imageUrlInput = null;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngOnInit() {
    this.getMenus();
  }

  getMenus() {
    this.menuService.getMenus().subscribe(
      data => {
        this.menus = data;
        this.dataSource = new MatTableDataSource(data);

      },
      error => {
        alert("There was an issue while syncing the menus. Please try again later.");
      }
    );
  }

  addEntry() {
    this.menu.entries.push({ name: '' });
  }

  deleteEntry(index: number) {
    this.menu.entries.splice(index, 1);
  }

  createMenu(menu: Menu) {
    let validatorResult = this.validator.validate(menu.name, menu.imageUrl, menu.entries);
    if (typeof validatorResult === "string") {
      alert(validatorResult);
      return;
    }

    if(menu.id == undefined) {
      this.menuService.createMenu(menu).subscribe(
        data => {
          console.log('Menu created successfully', data);
          this.getMenus();
          this.resetForm();
        },
        error => {
          alert("There was an issue with creating the menu. Please try again later.");
          console.log('Error creating menu', error);
        }
      );
    } else {
      this.menuService.updateMenu(menu).subscribe(res => {
        // update the table data
        this.getMenus();
        this.resetForm();
      }, err => {
        alert("There was an issue with updating your menu. Please try again later.")
      });
    }    
  }
  
  editMenu(menu: Menu) {
    this.menu = menu;

    //populate the form fields with the current values of the selected menu

    if(this.nameInput) {
      this.nameInput.nativeElement.value = this.menu.name;
    }

    if(this.imageUrlInput) {
      this.imageUrlInput.nativeElement.value = this.menu.imageUrl;
    }  
    }

    updateMenu(menu: Menu) {
      this.menuService.updateMenu(menu).subscribe(() => {
          this.getMenus();
      });
  }

  deleteMenu(menu: Menu) {
    if (menu.id) {
        this.menuService.deleteMenu(menu.id).subscribe(() => {
            this.getMenus();
        });
    } else {
      alert("Sorry, there was an issue while deleting this menu.");
      console.error("Error: menu does not have a valid id.")
    }
}

  resetForm() {
    this.menu = { name: '', imageUrl: '', entries: [] };
  }
    
}
