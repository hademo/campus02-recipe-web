import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Recipe } from '../../../lib/recipe.dto';
import { StorageService } from '../storage/storage.service';
import { jsPDF } from 'jspdf';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  constructor(
    private readonly http: HttpClient,
    private storageService: StorageService
  ) {}

  public findAll(): Observable<Recipe[]> {
    return this.http.get<Recipe[]>('http://localhost:3000/recipes?username=' + this.storageService.getLoggedInUser()?.id);
  }

  public findById(id: number): Observable<Recipe> {
    return this.http.get<Recipe>(`http://localhost:3000/recipes/${id}`);
  }

  public save(recipe: Partial<Recipe>) {
    recipe.username = this.storageService.getLoggedInUser()?.id;
    return this.http.post<Recipe>('http://localhost:3000/recipes', recipe);
  }

  public update(recipe: Partial<Recipe>) {
    return this.http.put<Recipe>(
      `http://localhost:3000/recipes/${recipe.id}`,
      recipe
    );
  }

  public delete(recipe: Recipe) {
    return this.http.delete<Recipe>(
      `http://localhost:3000/recipes/${recipe.id}`
    );
  }

  public toPdf(recipe: Recipe) {
    var doc = new jsPDF();
    doc.setFont('helvetica');
    doc.setFontSize(12);
    doc.text(
      doc.splitTextToSize(
        `
      Titel: ${recipe.name}\n
      Beschreibung: ${recipe.description}\n
      Zutaten: ${recipe.ingredients.join(', ')}
      `,
        180
      ),
      10,
      20
    );

    window.open(URL.createObjectURL(doc.output('blob')));
  }
}
