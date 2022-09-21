import { Component, Input, OnInit } from '@angular/core';
import { Book } from 'src/app/interfaces/book';

@Component({
  selector: 'book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss'],
})
export class BookCardComponent implements OnInit {
  @Input() bookData: Book = {
    title: '',
    author: '',
    description: '',
    isbn: '',
    cover: '',
    subtitle: '',
  };

  constructor() {}

  ngOnInit(): void {}
}
