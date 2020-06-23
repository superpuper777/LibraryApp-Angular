import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

import { Author } from './author';

@Injectable({
  providedIn: 'root',
})
export class AuthorService {
  private SERVER_URL = 'http://localhost:3000/authors';
  constructor(private httpClient: HttpClient) {}

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
  getAuthors(): Observable<Author[]> {
    return this.httpClient
      .get<Author[]>(this.SERVER_URL)
      .pipe(catchError(this.handleError));
  }

  getAuthor(id: number): Observable<Author> {
    const url = `${this.SERVER_URL}/${id}`;
    return this.httpClient.get<Author>(url).pipe(catchError(this.handleError));
  }
}
