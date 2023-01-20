import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StorageService } from 'src/app/services/storage/storage.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public loginValid = true;
  public username = '';
  public password = '';

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
    this.loginValid = true;
    this.userService.findById(this.username).subscribe({
      next: (user) => {
        if (user.password === this.password) {
          this.storageService.loginUser(user);
          this.loginValid = true;
          this.router.navigateByUrl('/');
        } else {
          this.loginValid = false;
        }
      },
      error: () => (this.loginValid = false),
    });
  }
}
