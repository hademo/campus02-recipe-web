import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Entry } from 'src/app/interfaces/entry';

@Injectable({
  providedIn: 'root',
})
export class EntryService {
  constructor(
    private readonly http: HttpClient
  ) {}

  createEntry(entry: Entry): Observable<Entry> {
    return this.http.post<Entry>('http://localhost:3000/entries', entry);
  }

  getEntrys(): Observable<Entry[]> {
    return this.http.get<Entry[]>('http://localhost:3000/entries');
  }

  getEntry(id: number): Observable<Entry> {
    return this.http.get<Entry>(`http://localhost:3000/entries/${id}`);
  }

  updateEntry(entry: Entry): Observable<Entry> {
    return this.http.put<Entry>(`http://localhost:3000/entries/${entry.id}`, entry);
  }

  deleteEntry(id: number): Observable<Entry> {
    return this.http.delete<Entry>(`http://localhost:3000/entries/${id}`);
  }

}
