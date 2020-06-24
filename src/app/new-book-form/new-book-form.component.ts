import { Observable } from 'rxjs';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
    debugger;
    console.log(book);
    // console.log(
    //   author.books.push({
    //     id: 20,
    //     name: 'scvds',
    //     author: 'new author',
    //     genre: 'horror',
    //     summary: 'string summary',
    //   })
    // );
    console.log(author.books);
    // this.bookService.createBook(book).subscribe((book) => {
    //   console.log((this.book = book));
    // });
  }

  goBack(): void {
    this.location.back();
  }
}
