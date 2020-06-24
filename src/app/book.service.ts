import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';

import { Observable, throwError, of } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

import { Book } from './book';
import { Author } from './author';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  private SERVER_URL = 'http://localhost:3000/books';

  constructor(private httpClient: HttpClient) {}
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      // Client-side errors
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side errors
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }

  getBooks(): Observable<Book[]> {
    return this.httpClient
      .get<Book[]>(this.SERVER_URL)
      .pipe(catchError(this.handleError));
  }

  getBook(id: number): Observable<Book> {
    const url = `${this.SERVER_URL}/${id}`;
    return this.httpClient.get<Book>(url).pipe(catchError(this.handleError));
  }

  createBook(book: Book): Observable<Book> {
    return this.httpClient
      .post<Book>(this.SERVER_URL, book, this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  deleteBook(book: Book | number): Observable<Book> {
    const id = typeof book === 'number' ? book : book.id;
    const url = `${this.SERVER_URL}/${id}`;
    return this.httpClient
      .delete<Book>(url, this.httpOptions)
      .pipe(catchError(this.handleError));
  }
}
