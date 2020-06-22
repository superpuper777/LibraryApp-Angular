import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { BookService } from './../book.service';
import { AuthorService } from './../author.service';

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

  @Input() authors;
  @Output() onAddNewBook: EventEmitter<Book> = new EventEmitter();
  book: Book;

  genres = [
    'Novel',
    'Detective Novel',
    `Children's novel`,
    'Fantasy',
    'Horror',
  ];

  constructor(
    private authorService: AuthorService,
    private bookService: BookService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.authorService
      .getAuthors()
      .subscribe((authors) => (this.authors = authors));
  }

  addNewBook() {
    if (this.name.trim()) {
      const book: Book = {
        id: this.id,
        name: this.name,
        author: this.author,
        genre: this.genre,
        summary: this.summary,
      };
      console.log(book);
      this.onAddNewBook.emit(book);

      this.name = this.author = this.summary = '';
    }
  }

  goBack(): void {
    this.location.back();
  }
}
