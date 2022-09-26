import { Pipe, PipeTransform } from '@angular/core';
import { Book } from '../interfaces/book';

@Pipe({
  name: 'filterPipe',
})
export class FilterPipePipe implements PipeTransform {
  transform(books: Book[] | null, searchTerm: string): Book[] {
    if (searchTerm.length === 0) {
      return books || [];
    }

    if (!books) {
      return [];
    }

    return books.filter((book) =>
      book.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }
}
