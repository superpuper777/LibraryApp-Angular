import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { BookService } from './../book.service';

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
  constructor(
    private route: ActivatedRoute,
    private bookService: BookService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getBook();
  }

  getBook(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.bookService.getBook(id).subscribe((book) => (this.book = book));
  }

  showEditBookForm(): void {
    this.isShowEdit = true;
  }

  removeBook(book: Book): void {
    console.log(book);
    console.log(this.books.filter((b) => b !== book));
  }

  editBook(book: Book): void {
    console.log(book);
  }

  goBack(): void {
    this.location.back();
  }
}
