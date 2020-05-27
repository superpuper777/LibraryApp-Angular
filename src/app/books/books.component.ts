import { Component, OnInit } from '@angular/core';

import { Book } from '../book';
import { BOOKS } from '../mock-books';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
})
export class BooksComponent implements OnInit {
  addingBook: boolean;
  selectedBook: Book;
  books = BOOKS;

  constructor() {}

  ngOnInit(): void {}

  onSelectAuthor() {
    console.log('I selected Author');
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
