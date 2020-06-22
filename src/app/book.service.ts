import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Book } from './book';
import { BOOKS } from './mock-books';

import { Author } from './author';
import { AUTHORS } from './mock-authors';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  private SERVER_URL = 'http://localhost:3000/books';

  constructor(private httpClient: HttpClient) {}

  public getBooks() {
    return this.httpClient.get(this.SERVER_URL);
  }

  createBook(book: Book): Observable<Book> {
    return of(book);
  }

  getBook(id: number): Observable<Book> {
    return of(BOOKS.find((book) => book.id === id));
  }

  getAuthor(id: number): Observable<Author> {
    return of(AUTHORS.find((author) => author.id == id));
  }
}
