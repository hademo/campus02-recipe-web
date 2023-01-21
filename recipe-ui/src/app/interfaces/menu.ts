import { Entry } from "./entry";

export interface Menu {
    id: number;
    name: string;
    imageUrl: string;
    entries: Entry[];
  }