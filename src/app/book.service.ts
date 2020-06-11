import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Book } from './book';
import { BOOKS } from './mock-books';

import { Author } from './author';
import { AUTHORS } from './mock-authors';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  constructor() {}

  getBooks(): Observable<Book[]> {
    return of(BOOKS);
  }

  getBook(id: number): Observable<Book> {
    return of(BOOKS.find((book) => book.id === id));
  }

  getAuthor(id: number): Observable<Author> {
    return of(AUTHORS.find((author) => author.id == id));
  }
}
