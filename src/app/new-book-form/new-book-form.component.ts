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
  books: Book[];

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

  addNewBook(book: Book): void {
    this.bookService.createBook(book).subscribe((book) => {
      console.log(this.book);
    });
  }

  goBack(): void {
    this.location.back();
  }
}
