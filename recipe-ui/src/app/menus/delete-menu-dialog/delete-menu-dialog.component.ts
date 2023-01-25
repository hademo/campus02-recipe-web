import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MenuService } from 'src/app/services/menu/menu.service';

@Component({
  selector: 'app-delete-menu-dialog',
  templateUrl: './delete-menu-dialog.component.html',
  styleUrls: ['./delete-menu-dialog.component.scss'],
})
export class DeleteMenuDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<DeleteMenuDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private menuService: MenuService
  ) {}

  public confirmDelete() {
    this.menuService.delete(this.data.menu).subscribe(() => {
      this.dialogRef.close(this.data.menu);
    });
  }
}
