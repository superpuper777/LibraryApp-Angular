import { Component, OnInit } from '@angular/core';
import { BookService } from './../book.service';
import { AuthorService } from './../author.service';
import { Book } from '../book';

import { Author } from './../author';
import { AUTHORS } from './../mock-authors';

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

  // addNewBook(book: Book) {
  //   let test = {
  //     id: 45,
  //     name: book.author,
  //     biography: 'qwe',
  //     books: [],
  //   };
  //   test.books.push(book);

  //   this.authors.push(test);
  //   this.bookService
  //     .createBook(book)
  //     .subscribe((book) => this.books.push(book));
  // }
}
