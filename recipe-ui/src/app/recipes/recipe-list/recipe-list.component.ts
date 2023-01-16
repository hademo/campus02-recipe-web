import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Recipe } from '../../../lib/recipe.dto';
import { RecipeService } from '../../services/recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [];
  filteredRecipes: Recipe[] = [];

  constructor(
    private readonly recipeService: RecipeService,
    private readonly sanitizer: DomSanitizer
  ) { }

  ngOnInit(): void {
    this.recipeService.findAll().subscribe((recipes) => {
      this.recipes = this.transformRecipes(recipes);
      this.filteredRecipes = [...this.recipes];
    });
  }

  public onSearchChange(event: Event): void {
    const value = (event.target as HTMLInputElement).value.toLowerCase();
    console.log('onsearchchange', value);

    if (!value || value.length === 0) {
      this.filteredRecipes = [...this.recipes];
      return;
    }

    this.filteredRecipes = this.recipes.filter((recipe) =>
      recipe.name.toLowerCase().includes(value)
    );
  }

  private transformRecipes(recipes: Recipe[]): Recipe[] {
    return recipes.map((recipe) => ({
      ...recipe,
      link: this.sanitizer.bypassSecurityTrustResourceUrl(
        recipe.link as string
      ),
    }));
  }
}
