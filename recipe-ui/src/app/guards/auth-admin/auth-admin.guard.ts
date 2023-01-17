import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { StorageService } from 'src/app/services/storage/storage.service';

@Injectable({
  providedIn: 'root',
})
export class AuthAdminGuard implements CanActivate {
  constructor(private storageService: StorageService, private router: Router) {}

  public canActivate(): boolean | UrlTree {
    return this.storageService.isUserAdmin() || this.router.parseUrl('/');
  }
}
