import { Component, OnInit } from '@angular/core';
import { BookService } from './../book.service';
import { Book } from '../book';

import { Author } from './../author';
import { AUTHORS } from './../mock-authors';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
})
export class BooksComponent implements OnInit {
  addingBook: boolean;
  selectedBook: Book;
  books: Book[];

  author: Author;
  selectedAuthor: Author;
  authors = AUTHORS;
  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    this.getBooks();
  }

  getBooks(): void {
    this.bookService.getBooks().subscribe((books) => (this.books = books));
  }

  // onSelectAuthor(author: Author): void {
  //   this.selectedAuthor = author;
  //   console.log(typeof author);
  // }

  // onSelectBook(book: Book): void {
  //   this.selectedBook = book;
  //   console.log(book);
  // }

  showAddBookForm(): void {
    this.addingBook = true;
  }

  addNewBook(book: Book) {
    console.log(book);
    //this.books.push(book);

    let test = {
      id: 45,
      name: book.author,
      biography: 'qwe',
      books: [],
    };
    test.books.push(book);

    this.authors.push(test);

    //this.authors = [...this.authors];
    console.log(this.books);
  }
}
