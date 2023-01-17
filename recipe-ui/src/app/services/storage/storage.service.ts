import { Injectable } from '@angular/core';
import { User } from 'src/lib/user.dto';

const USER_KEY = 'user';
const USER_ROLE_ADMIN = 'admin';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  constructor() {}

  public clearStorage(): void {
    window.sessionStorage.clear();
  }

  public loginUser(user: User): void {
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  public logoutUser(): void {
    window.sessionStorage.removeItem(USER_KEY);
  }

  public getLoggedInUser(): User | null {
    const user = window.sessionStorage.getItem(USER_KEY);
    if (user) {
      return JSON.parse(user);
    }
    return null;
  }

  public isUserLoggedIn(): boolean {
    return this.getLoggedInUser() !== null;
  }

  public isUserAdmin(): boolean {
    return this.getLoggedInUser()?.role === USER_ROLE_ADMIN;
  }
}
