import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MenuService } from 'src/app/services/menu/menu.service';
import { Menu } from 'src/lib/menu.dto';
import { DeleteMenuDialogComponent } from '../delete-menu-dialog/delete-menu-dialog.component';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.scss'],
})
export class MenuListComponent implements OnInit {
  menus: Menu[] = [];
  menusFiltered: Menu[] = [];
  displayedColumns: string[] = ['id', 'name', 'imageUrl', 'entries', 'actions'];

  constructor(private menuService: MenuService, public dialog: MatDialog) {}

  public ngOnInit(): void {
    this.menuService.findAll().subscribe((data) => {
      this.menus = data;
      this.menusFiltered = [...this.menus];
    });
  }

  public onSearchChange(event: Event): void {
    const value = (event.target as HTMLInputElement).value.toLowerCase();

    if (!value || value.length === 0) {
      this.menusFiltered = [...this.menus];
      return;
    }

    this.menusFiltered = this.menus.filter((menu) =>
      menu.name.toLowerCase().includes(value)
    );
  }

  public openDeleteModal(menu: Menu): void {
    const dialogRef = this.dialog.open(DeleteMenuDialogComponent, {
      width: '250px',
      data: { menu },
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.menus = this.menus.filter((_) => _.id !== menu.id);
      }
    });
  }

  public toPdf(menu: Menu) {
    this.menuService.toPdf(menu);
  }
}
