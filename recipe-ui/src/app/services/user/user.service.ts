import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/lib/user.dto';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private readonly http: HttpClient) {}

  public findAll(): Observable<User[]> {
    return this.http.get<User[]>('http://localhost:3000/users');
  }

  public findById(id: string): Observable<User> {
    return this.http.get<User>(`http://localhost:3000/users/${id}`);
  }

  public save(user: Partial<User>) {
    return this.http.post<User>('http://localhost:3000/users', user);
  }

  public update(user: Partial<User>) {
    return this.http.put<User>(`http://localhost:3000/users/${user.id}`, user);
  }

  public delete(user: User) {
    return this.http.delete<User>(`http://localhost:3000/users/${user.id}`);
  }
}
