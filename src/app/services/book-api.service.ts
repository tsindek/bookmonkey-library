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

  addBook(body: Book): Observable<Book> {
    const headers = { 'Content-Type': 'application/json' };
    return this.http.post<Book>('http://localhost:4730/books/', body, {
      headers: headers,
    });
  }
}
