import { MenuEntry } from "./menuEntry";

export interface Menu {
    id?: number;
    name: string;
    imageUrl: string;
    entries: MenuEntry[];
  }