# Kitchen Master

Dieses Projekt besteht aus einem dummy-backend (json-server) und einem Angular Frontend bestehend aus drei
Entitäten.\
Für die Benutzung des Systems **MUSS** das Backend gestartet sein, damit eine Authentifizierung ermöglicht
wird.

## Teammitglieder

* Hade Mohamed
* Raphael Pansi
* Florian Arneth

## Entitäten

1. Rezept (Recipe) von Hade Mohamed
2. Benutzer (User) von Raphael Pansi
3. Menü (Menu) von Florian Arneth

## Starten

1. Backend

```shell
cd recipe-api
npm install
npm start
```

2. UI

```shell
cd recipe-ui
npm install
npm start
```

**Backend-URL**: http://localhost:3000\
**UI-URL**: http://localhost:4200

### User-Login

#### Dummy

* **Username**: dummy-user
* **PW**: HelloWorld!123

#### Admin

* **Username**: admin-user
* **PW**: MyAdmin$987

## Entität 1: Rezept (Recipe) von Hade Mohamed

#### Verwaltung von Rezepten mit Name, Beschreibung, Link zu YouTube-Video & Liste von Zutaten

* Komponenten
    * CRUD
        * Create: **CreateRecipeComponent**
            * Formular zur Erstellung eines neuen Rezepts
        * Read: **RecipeListComponent**
            * Liste zur Anzeige aller Rezepte eines Benutzers
        * Update/Delete: **EditRecipeComponent**
            * Formular zur Bearbeitung bzw. Löschung eines Rezepts
    * Sonstige
        * **IngredientsFormComponent**
            * Formular zur Verwaltung der Zutaten je Rezept
            * Two-Way Data Binding mit den Rezept-Formularen
* Services
    * **RecipeService**
        * Service zur Rezept-Verwaltung durch Backend-Kommunikation mit HTTP (GET, POST, PUT, DELETE)
* Validatoren
    * **IngredientsValidator**
        * Direktive zur Validierung von gültigen Zutaten (Zutatenliste)
* Spezial-Features
    * **PDF Generierung**

## Entität 2: Benutzer (User) von Raphael Pansi

#### Verwaltung von Benutzern mit Benutzername (ID), E-Mail, Passwort, Rolle & Liste von externen Links

* Komponenten
    * CRUD
        * Create: **CreateUserComponent**
            * Formular zur Erstellung eines neuen Benutzers
        * Read: **UserListComponent**
            * Liste zur Anzeige aller Benutzer
            * Suchen bzw. Filtern nach Benutzername
        * Update: **EditUserComponent**
            * Formular zur Bearbeitung eines Benutzers
        * Delete: **DeleteUserDialogComponent**
            * Dialog zur Löschung eines Benutzers
    * Sonstige
        * **LinksFormComponent**
            * Formular zur Verwaltung der Links je Benutzer
            * Child-Component mit Two-Way Data Binding zu Benutzer-Formularen
        * **LoginComponent**
            * Formular zum Login für bestehende Benutzer
        * **RegisterComponent**
            * Formular zur Registrierung für neue Benutzer
* Services
    * **UserService**
        * Service zur Benutzer-Verwaltung durch Backend-Kommunikation mit HTTP (GET, POST, PUT, DELETE)
    * **StorageService**
        * Service zur Speicherung des eingeloggten Benutzers in einer Session
* Validatoren
    * **EmailValidator**
        * Direktive zur Validierung von gültigen E-Mails
* Spezial-Features
    * Route Guards (CanActivate)
        * **AuthGuard**
            * Schützt Routen vor Zugriff durch Benutzer, die nicht eingeloggt sind
        * **AuthAdminGuard**
            * Schützt Routen zur Benutzer-Verwaltung (CRUD) vor Zugriff durch Benutzer, die keine Administratoren sind

## Entität 3: Menü (Menu) von Florian Arneth

#### Verwaltung von Menüs mit Name, Link zu Bild & Liste von Bestandteilen

* Komponenten
    * CRUD
        * Create: **CreateMenuComponent**
            * Formular zur Erstellung eines neuen Menüs
        * Read: **MenuListComponent**
            * Liste zur Anzeige aller Menüs eines Benutzers
        * Update: **EditMenuComponent**
            * Formular zur Bearbeitung eines Menüs
        * Delete: **DeleteMenuDialogComponent**
            * Dialog zur Löschung eines Menüs
    * Sonstige
        * **EntryFormComponent**
            * Formular zur Verwaltung der Bestandteile je Menü
            * Two-Way Data Binding mit den Menü-Formularen
* Services
    * **MenuService**
        * Service zur Menü-Verwaltung durch Backend-Kommunikation mit HTTP (GET, POST, PUT, DELETE)
* Validatoren
    * **LinksValidator**
        * Direktive zur Validierung von gültigen URLs
* Spezial-Features
    * **PDF Generierung**