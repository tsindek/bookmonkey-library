import { Book } from '../interfaces/book';

export class EmptyBook implements Book {
  cover = '';
  title = '';
  author = '';
  description = '';
  isbn = '';
  subtitle = '';
}
