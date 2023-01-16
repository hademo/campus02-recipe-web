import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Recipe } from '../../lib/recipe.dto';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  constructor(private readonly http: HttpClient) {}

  public findAll(): Observable<Recipe[]> {
    return this.http.get<Recipe[]>('http://localhost:3000/recipes');
  }

  public findById(id: number): Observable<Recipe> {
    return this.http.get<Recipe>(`http://localhost:3000/recipes/${id}`);
  }
}
