import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { StorageService } from 'src/app/services/storage/storage.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private storageService: StorageService, private router: Router) {}

  public canActivate(): boolean | UrlTree {
    return (
      this.storageService.isUserLoggedIn() || this.router.parseUrl('/login')
    );
  }
}
