import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { BooksComponent } from './books/books.component';
import { BookComponent } from './book/book.component';
import { AuthorsComponent } from './authors/authors.component';
import { AuthorComponent } from './author/author.component';

const routes: Routes = [
  { path: '', redirectTo: '/books', pathMatch: 'full' },
  { path: 'books', component: BooksComponent },
  { path: 'authors', component: AuthorsComponent },
  { path: 'book/:id', component: BookComponent },
  { path: 'author/:id', component: AuthorComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
