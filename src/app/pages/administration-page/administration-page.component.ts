import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from 'src/app/interfaces/book';
import { BookApiService } from 'src/app/services/book-api.service';

@Component({
  selector: 'administration-page',
  templateUrl: './administration-page.component.html',
  styleUrls: ['./administration-page.component.scss'],
})
export class AdministrationPageComponent implements OnInit {
  bookTitle: string = '';
  bookSubtitle: string = '';
  bookAuthor: string = '';
  bookIsbn: string = '';
  bookDescription: string = '';
  newBook$!: Observable<Book>;

  constructor(private apiService: BookApiService) {}

  ngOnInit(): void {}

  addBook() {
    const body: Book = {
      title: this.bookTitle,
      subtitle: this.bookSubtitle,
      author: this.bookAuthor,
      isbn: this.bookIsbn,
      description: this.bookDescription,
    };
    this.apiService.addBook(body).subscribe();
  }
}
