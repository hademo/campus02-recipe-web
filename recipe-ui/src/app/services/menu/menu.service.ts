import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import jsPDF from 'jspdf';
import { Observable } from 'rxjs';
import { Menu } from '../../../lib/menu.dto';
import { StorageService } from '../storage/storage.service';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  constructor(
    private readonly http: HttpClient,
    private storageService: StorageService
  ) {}

  public findAll(): Observable<Menu[]> {
    return this.http.get<Menu[]>(
      'http://localhost:3000/menus?username=' +
        this.storageService.getLoggedInUser()?.id
    );
  }

  public findById(id: number): Observable<Menu> {
    return this.http.get<Menu>(`http://localhost:3000/menus/${id}`);
  }

  public save(menu: Partial<Menu>) {
    menu.username = this.storageService.getLoggedInUser()?.id;
    return this.http.post<Menu>('http://localhost:3000/menus', menu);
  }

  public update(menu: Partial<Menu>) {
    return this.http.put<Menu>(`http://localhost:3000/menus/${menu.id}`, menu);
  }

  public delete(menu: Menu) {
    return this.http.delete<Menu>(`http://localhost:3000/menus/${menu.id}`);
  }

  public toPdf(menu: Menu) {
    const pdf = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4',
    });

    pdf.text(
      `Name: ${menu.name}\nBestandteile: ${menu.entries.join(', ')}`,
      pdf.internal.pageSize.getWidth() / 2,
      20,
      { align: 'center' }
    );

    try {
      const imgData = menu.imageUrl;
      const imgProps = pdf.getImageProperties(imgData);

      const margin = 0.5;

      const pdfWidth = pdf.internal.pageSize.width * (1 - margin);
      const pdfHeight = pdf.internal.pageSize.height * (1 - margin);

      const x = pdf.internal.pageSize.width * (margin / 2);
      const y = pdf.internal.pageSize.height * (margin / 2);

      const widthRatio = pdfWidth / imgProps.width;
      const heightRatio = pdfHeight / imgProps.height;
      const ratio = Math.min(widthRatio, heightRatio);

      const w = imgProps.width * ratio;
      const h = imgProps.height * ratio;

      pdf.addImage(imgData, 'JPEG', x, y, w, h);
    } catch (error) {
      console.error('Could not add image to PDF', error);
    }

    window.open(URL.createObjectURL(pdf.output('blob')));
  }
}
