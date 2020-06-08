import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BooksComponent } from './books/books.component';
import { BookComponent } from './book/book.component';
import { NewBookFormComponent } from './new-book-form/new-book-form.component';
import { EditBookComponent } from './edit-book/edit-book.component';
import { AuthorsComponent } from './authors/authors.component';
import { AuthorComponent } from './author/author.component';
import { EditAuthorComponent } from './edit-author/edit-author.component';
import { NewAuthorFormComponent } from './new-author-form/new-author-form.component';

@NgModule({
  declarations: [AppComponent, BooksComponent, BookComponent, NewBookFormComponent, EditBookComponent, AuthorsComponent, AuthorComponent, EditAuthorComponent, NewAuthorFormComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
