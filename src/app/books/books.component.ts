import { Component, OnInit } from '@angular/core';
import { BookService } from './../book.service';
import { AuthorService } from './../author.service';
import { Book } from '../book';

import { Author } from './../author';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
})
export class BooksComponent implements OnInit {
  books: Book[];
  authors: Author[];

  constructor(
    private bookService: BookService,
    private authorService: AuthorService
  ) {}

  ngOnInit(): void {
    this.getBooks();
    this.getAuthors();
  }

  getBooks(): void {
    this.bookService.getBooks().subscribe((data: any[]) => {
      console.log(data);
      this.books = data;
    });
  }

  getAuthors(): void {
    this.authorService.getAuthors().subscribe((data: any[]) => {
      console.log(data);
      this.authors = data;
    });
  }
}
