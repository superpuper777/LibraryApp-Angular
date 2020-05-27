import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BooksComponent } from './books/books.component';
import { BookComponent } from './book/book.component';
import { NewBookFormComponent } from './new-book-form/new-book-form.component';

@NgModule({
  declarations: [AppComponent, BooksComponent, BookComponent, NewBookFormComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
