import { MenuEntry } from "src/app/interfaces/menuEntry";

export class MenuValidator {
  constructor() {}

  validate(menuName: string, menuImageUrl: string, menuEntries: MenuEntry[]): boolean | string {
    if (!this.validateMenuName(menuName)) {
      return "Please enter a menu name.";
    } 

    if (!this.validateMenuImageUrl(menuImageUrl)) {
      return "Please enter a menu image url.";
    } 

    if (!this.validateMenuEntries(menuEntries)) {
      return "Please enter at least 1 menu entry.";
    } 

    return true;
  }

  private validateMenuName(menuName : string) : boolean {
    if (menuName === "") {
      return false;
    }
    return true;
  }

  private validateMenuImageUrl(menuImageUrl : string) : boolean {
    if (menuImageUrl === "") {
      return false;
    }
    return true;
  }

  private validateMenuEntries(menuEntries : MenuEntry[]) : boolean {
    if (menuEntries.length > 0){
      return true;
    }
    return false;
  }
}
