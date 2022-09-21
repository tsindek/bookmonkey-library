import { Component, OnInit } from '@angular/core';
import { BookCardComponent } from 'src/app/components/book-card/book-card.component';
import { Book } from 'src/app/interfaces/book';
import { BookApiService } from 'src/app/services/book-api.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'book-list-page',
  templateUrl: './book-list-page.component.html',
  styleUrls: ['./book-list-page.component.scss'],
})
export class BookListPageComponent implements OnInit {
  books: Observable<Book[]>;

  constructor(private bookApi: BookApiService) {
    this.books = this.bookApi.getBooks();
  }

  ngOnInit(): void {}
}
