import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Recipe } from '../../lib/recipe.dto';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  constructor(private readonly http: HttpClient) { }

  public findAll(): Observable<Recipe[]> {
    return this.http.get<Recipe[]>('http://localhost:3000/recipes');
  }

  public findById(id: number): Observable<Recipe> {
    return this.http.get<Recipe>(`http://localhost:3000/recipes/${id}`);
  }

  public save(recipe: Partial<Recipe>) {
    return this.http.post<Recipe>("http://localhost:3000/recipes", recipe)
  }

  public update(recipe: Partial<Recipe>) {
    return this.http.put<Recipe>(`http://localhost:3000/recipes/${recipe.id}`, recipe)
  }

  public delete(recipe: Recipe) {
    return this.http.delete<Recipe>(`http://localhost:3000/recipes/${recipe.id}`)
  }
}