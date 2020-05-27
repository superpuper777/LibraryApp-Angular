import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Book } from './../book';

@Component({
  selector: 'app-new-book-form',
  templateUrl: './new-book-form.component.html',
  styleUrls: ['./new-book-form.component.css'],
})
export class NewBookFormComponent implements OnInit {
  name = '';
  author = '';
  genre = '';
  summary = '';
  id = Math.floor(Math.random() * 100);
  @Output() onAddNewBook: EventEmitter<Book> = new EventEmitter();
  book: Book;

  genres = [
    'Novel',
    'Detective Novel',
    `Children's novel`,
    'Fantasy',
    'Horror',
  ];

  constructor() {}

  ngOnInit(): void {}

  addNewBook() {
    if (this.name.trim() && this.author.trim()) {
      const book: Book = {
        id: 1,
        name: this.name,
        author: this.author,
        genre: this.genre,
        summary: this.summary,
      };

      this.onAddNewBook.emit(book);
      this.name = this.author = this.summary = '';
    }

    console.log('New book');
  }
}
