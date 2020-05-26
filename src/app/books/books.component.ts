import { Component, OnInit } from '@angular/core';

import { Book } from '../book';
import { BOOKS } from '../mock-books';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
})
export class BooksComponent implements OnInit {
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
}
