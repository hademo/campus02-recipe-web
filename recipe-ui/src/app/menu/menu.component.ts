import { Component, ViewChild, ElementRef } from '@angular/core';
import { FormArray, FormGroup, FormControl } from '@angular/forms';
import { Entry } from '../interfaces/entry';
import { Menu } from '../interfaces/menu';
import { MenuService } from '../services/menuService/menu.service';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  @ViewChild('name') nameInput: ElementRef | null;
  @ViewChild('imageUrl') imageUrlInput: ElementRef | null;

  displayedColumns = ['id', 'name', 'imageUrl', 'edit', 'delete'];
  menus: Menu[] = [];
  menu: any = { name: '', imageUrl: '', entries: [] };

  name : any = null;

  constructor(private menuService: MenuService) {
    this.nameInput = null;
    this.imageUrlInput = null;
  }

  ngOnInit() {
    this.getMenus();
  }

  getMenus() {
    this.menuService.getMenus().subscribe(
      data => {
        this.menus = data;
      },
      error => {
        console.log('Error getting menus', error);
      }
    );
  }

  addEntry() {
    this.menu.entries.push({ name: '' });
  }

  deleteEntry(index: number) {
    this.menu.entries.splice(index, 1);
  }

  createMenu() {

    if(this.menu.id == undefined) {
      this.menuService.createMenu(this.menu).subscribe(
        data => {
          console.log('Menu created successfully', data);
          this.resetForm();
        },
        error => {
          console.log('Error creating menu', error);
        }
        );
      } else {
        this.menuService.updateMenu(this.menu).subscribe(res => {
          // update the table data
          this.getMenus();
      }, err => {
          // handle error
      });
    }    
  }
  
      editMenu(menu: Menu) {
        this.menu = menu;
        //populate the form fields with the current values of the selected menu
        this.nameInput!.nativeElement.value = this.menu.name;
        this.imageUrlInput!.nativeElement.value = this.menu.imageUrl;
    }

    updateMenu(menu: Menu) {
      this.menuService.updateMenu(menu).subscribe(() => {
          //update the menus array in the component so the table updates
          this.getMenus();
      });
  }

  deleteMenu(menu: Menu) {
    this.menuService.deleteMenu(menu.id).subscribe(() => {
        //update the menus array in the component so the table updates
        this.getMenus();
    });
  }

  resetForm() {
    this.menu = { name: '', imageUrl: '', entries: [] };
  }
    
}
