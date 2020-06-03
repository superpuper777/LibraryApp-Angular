import { Book } from './book';

export interface Author {
  id: number;
  name: string;
  biography: string;
  books: Book[];
}
