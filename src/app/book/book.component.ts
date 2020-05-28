import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Book } from './../book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
})
export class BookComponent implements OnInit {
  isShowEdit: boolean = false;
  @Input() book: Book;

  @Input() books: Book[];
  constructor() {}

  ngOnInit(): void {}

  showEditBookForm(): void {
    this.isShowEdit = true;
  }

  removeBook(book: Book) {
    console.log(this.books.filter((b) => b !== book));
  }

  editBook(book: Book): void {
    console.log(this.book);
  }
}
