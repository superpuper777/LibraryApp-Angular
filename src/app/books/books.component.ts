import { Component, OnInit } from '@angular/core';

import { Book } from '../book';
import { BOOKS } from '../mock-books';
import { Author } from './../author';
import { AUTHORS } from './../mock-authors';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
})
export class BooksComponent implements OnInit {
  addingBook: boolean;
  selectedBook: Book;
  books = BOOKS;

  author: Author;
  selectedAuthor: Author;
  authors = AUTHORS;
  constructor() {}

  ngOnInit(): void {}

  onSelectAuthor(author: Author): void {
    this.selectedAuthor = author;
    console.log(typeof author);
  }

  onSelectBook(book: Book): void {
    this.selectedBook = book;
    console.log(book);
  }

  showAddBookForm(): void {
    this.addingBook = true;
  }

  addNewBook(book: Book) {
    this.books.push(book);
  }
}
