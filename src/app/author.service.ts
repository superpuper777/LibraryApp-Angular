import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Author } from './author';
import { AUTHORS } from './mock-authors';

@Injectable({
  providedIn: 'root',
})
export class AuthorService {
  constructor() {}

  getAuthors(): Observable<Author[]> {
    return of(AUTHORS);
  }
}
