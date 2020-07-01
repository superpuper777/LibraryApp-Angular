import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { BookService } from './../book.service';
import { AuthorService } from './../author.service';

import { Book } from './../book';
import { Author } from './../author';

@Component({
  selector: 'app-new-book-form',
  templateUrl: './new-book-form.component.html',
  styleUrls: ['./new-book-form.component.css'],
})
export class NewBookFormComponent implements OnInit {
  author: Author;
  authors: Author[];
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
    this.book = {
      id: null,
      name: '',
      author: '',
      genre: '',
      summary: '',
    };
  }

  addNewBook(book: Book, author: Author): void {
    this.authorService
      .getAuthor(Number(author))
      .subscribe((author) => console.log((this.author = author)));

    this.bookService.createBook(book).subscribe((book) => {
      this.book.author = this.author.name;
      this.author.books.push(book);
    });
  }

  goBack(): void {
    this.location.back();
  }
}
