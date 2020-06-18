import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { BooksComponent } from './books/books.component';
import { BookComponent } from './book/book.component';
import { AuthorsComponent } from './authors/authors.component';
import { AuthorComponent } from './author/author.component';
import { NewBookFormComponent } from './new-book-form/new-book-form.component';
import { NewAuthorFormComponent } from './new-author-form/new-author-form.component';

const routes: Routes = [
  { path: '', redirectTo: '/books', pathMatch: 'full' },
  { path: 'books', component: BooksComponent },
  { path: 'authors', component: AuthorsComponent },
  { path: 'book/:id', component: BookComponent },
  { path: 'author/:id', component: AuthorComponent },
  { path: 'books/new', component: NewBookFormComponent },
  { path: 'authors/new', component: NewAuthorFormComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
