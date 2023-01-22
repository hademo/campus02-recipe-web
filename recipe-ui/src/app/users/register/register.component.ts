import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/services/storage/storage.service';
import { UserService } from 'src/app/services/user/user.service';
import { getErrors } from 'src/lib/get-errors';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  public registerFailed = false;
  public username = '';
  public password = '';
  public email = '';

  constructor(
    private router: Router,
    private userService: UserService,
    private storageService: StorageService
  ) {}

  public ngOnInit(): void {
    if (this.storageService.isUserLoggedIn()) {
      this.router.navigateByUrl('/');
    }
  }

  public onSubmit(): void {
    this.userService
      .save({
        id: this.username,
        password: this.password,
        email: this.email,
        role: 'user',
      })
      .subscribe({
        next: (user) => {
          this.storageService.loginUser(user);
          this.router.navigateByUrl('/');
        },
        error: () => (this.registerFailed = true),
      });
  }

  public getErrors(control: NgModel) {
    return getErrors(control);
  }
}
