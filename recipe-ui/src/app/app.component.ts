import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from './services/storage/storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Kitchen Master';

  constructor(private router: Router, private storageService: StorageService) {}

  public isAuthenticated(): boolean {
    return this.storageService.isUserLoggedIn();
  }

  public isAdmin(): boolean {
    return this.storageService.isUserAdmin();
  }

  public logout(): void {
    this.storageService.logoutUser();
    this.router.navigateByUrl('/login');
  }
}
