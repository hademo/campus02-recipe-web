# RecipeUI

## Anforderungen
1. Entität #1 User
  * Create: Benutzer können angelegt werden (Benutzername, Passwort, E-Mail, Beschreibung, Avatar-Bild img-Link)
  * Read: 
    * Alle Benutzer können in einer Admin-View angezeigt werden
    * Einzelne Benutzer können detailliert über das Formular angezeigt werden
  * Update: Über die Admin-View können Benutzerinformationen und Formular aktualisiert werden (inkl. Formular-Validierung)
  * Delete: Über die Admin-View können Benutzer gelöscht werden
  * Routing
2. Entität #2 Recipe (Kochrezept)
  * Create:
    * Kochrezepte können über ein Formular angelegt werden
      * Daten:
        * Name
        * Textuelle Beschreibung der Schritte
        * Liste an Zutaten (Ingredients)
        * YouTube-Link, das dann später in ein iFrame angezeigt wird
      * Validierung:
        * Name und Textuelle Beschreibung muss angegeben werden
        * Youtube Link muss angegeben sein
        * Mindestens eine Zutat muss angegeben sein
      * Speichern über Formular
      * Löschen über Formular
  * Update: Kochrezepte können über die Rezeptansicht und über das Rezeptformular (von Create) bearbeitet werden
  * Delete: Kochrezepte können über das Formular gelöscht werden
  * Read: alle Kochrezepte können über Cards angesehen werden
    * Kochrezepte können über Namen gefiltert werden (Filterkriterien)
  * Routing: Ansicht -> Formular und zurück
3. Entität #3 Speisekarte
  * Speisekarten können über ein Formular angelegt werden
    * Daten:
      * Name
      * Bild der Speisekarte (URL), das dann später angezeigt wird
      * Liste an Einträgen der Speisekarte
    * Validierung:
      * Name muss angegeben sein
      * Bild Link muss angegeben sein
      * Mindestens eine Zutat muss angegeben sein
    * Speichern über Formular
    * Löschen über Formular
  * Update: Speisekarten können über die Speicherkartenansicht und über das Formular (von Create) bearbeitet werden
  * Delete: Speisekarten können über das Formular gelöscht werden
  * Read: alle Speisekarten können über Cards angesehen werden
    * Speisekarten können über Namen gefiltert werden (Filterkriterien)
  * Routing: Ansicht -> Formular und zurück

Spezial-Feature:
* PDF-Reports für Speisekarte über Formular generieren
* PDF-Reports für Kochrezept über Formular generieren

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.0.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
