export interface Menu {
  id: number;
  name: string;
  imageUrl: string;
  entries: string[];
  username?: string;
}

export type CreateMenu = Omit<Menu, 'id'>;
