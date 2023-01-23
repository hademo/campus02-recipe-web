import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Menu } from 'src/app/interfaces/menu';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  constructor(
    private readonly http: HttpClient
  ) {}

  createMenu(menu: Menu): Observable<Menu> {
    return this.http.post<Menu>('http://localhost:3000/menus', menu);
  }

  getMenus(): Observable<Menu[]> {
    return this.http.get<Menu[]>('http://localhost:3000/menus');
  }

  getMenu(id: number): Observable<Menu> {
    return this.http.get<Menu>(`http://localhost:3000/menus/${id}`);
  }

  updateMenu(menu: Menu): Observable<Menu> {
    return this.http.put<Menu>(`http://localhost:3000/menus/${menu.id}`, menu);
  }

  deleteMenu(id: number): Observable<Menu> {
    return this.http.delete<Menu>(`http://localhost:3000/menus/${id}`);
  }

}
