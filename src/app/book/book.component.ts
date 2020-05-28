import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Book } from './../book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
})
export class BookComponent implements OnInit {
  @Input() book: Book;

  @Input() books: Book[];
  constructor() {}

  ngOnInit(): void {}

  showEditBookForm(): void {
    console.log('edit book');
  }

  removeBook(book: Book) {
    console.log(this.books.filter((b) => b !== book));
  }
}
