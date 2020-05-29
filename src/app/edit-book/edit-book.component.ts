import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Book } from './../book';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css'],
})
export class EditBookComponent implements OnInit {
  @Input() book: Book;
  @Input() name: string;
  @Input() author: string;
  @Input() genre: string;
  @Input() summary: string;
  @Output() onEditBook: EventEmitter<Book> = new EventEmitter();

  genres = [
    'Novel',
    'Detective Novel',
    `Children's novel`,
    'Fantasy',
    'Horror',
  ];
  constructor() {}

  ngOnInit(): void {}

  saveChangesOfBook() {
    this.onEditBook.emit(this.book);
  }
}
