import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from '../interfaces/book';

@Injectable({
  providedIn: 'root',
})
export class BookApiService {
  constructor(private http: HttpClient) {}

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>('http://localhost:4730/books/');
  }
}
