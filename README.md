# Kochrezept Verwaltung
Dieses Projekt besteht aus einem dummy-backend mittels json-server und einem Angular Frontend bestehend aus drei Entitäten. Für die Benutzung des Systems **mus** das Backend gestartet sein, damit eine Authentifizierung ermöglicht wird.

## Teammitglieder
* Hade Mohamed
* Raphael Pansi
* Florian Arneth

# Entitäten
1. Rezept (Recipe) von Hade Mohamed
2. Benutzer (User) von Raphael Pansi
3. Speisekarte (Menu) von Florian Arneth

# Starten
1. Backend:
```shell
cd recipe-api
npm install
npm start
```
2. UI:
```shell
cd recipe-ui
npm install
npm start
```

Backend-URL: http://localhost:3000
UI-URL: http://localhost:4200
## User-Login
Username: dummy-user
PW: dummy-user-password

Username: admin-user
PW: admin-user-password

Username: new-user
PW: new-user-password

# Entität 1: Rezept/Recipe von Hade Mohamed
* **RecipeListComponent**
* **CreateRecipeComponent**
* **EditRecipeComponent**
* **IngredientsFormComponent**
    * Verwaltet die Zutaten
    * Two-Way-Binding mit den Rezept-Formular
* **RecipeService**
* Validator: **IngredientsValidator**
**Spezial-Feature:** PDF Generierung beliebiger Rezepte

