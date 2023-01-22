import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UserService } from 'src/app/services/user/user.service';
import { User } from 'src/lib/user.dto';
import { DeleteUserDialogComponent } from '../delete-user-dialog/delete-user-dialog.component';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {
  users: User[] = [];
  usersFiltered: User[] = [];
  displayedColumns: string[] = [
    'id',
    'email',
    'password',
    'role',
    'links',
    'actions',
  ];

  constructor(private userService: UserService, public dialog: MatDialog) {}

  public ngOnInit(): void {
    this.userService.findAll().subscribe((data) => {
      this.users = data;
      this.usersFiltered = [...this.users];
    });
  }

  public onSearchChange(event: Event): void {
    const value = (event.target as HTMLInputElement).value.toLowerCase();

    if (!value || value.length === 0) {
      this.usersFiltered = [...this.users];
      return;
    }

    this.usersFiltered = this.users.filter((user) =>
      user.id.toLowerCase().includes(value)
    );
  }

  public openDeleteModal(user: User): void {
    const dialogRef = this.dialog.open(DeleteUserDialogComponent, {
      width: '250px',
      data: { user },
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.users = this.users.filter((_) => _.id !== user.id);
      }
    });
  }
}
