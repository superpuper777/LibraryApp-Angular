import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { BookService } from './../book.service';
import { Author } from './../author';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css'],
})
export class AuthorComponent implements OnInit {
  isShowEdit: boolean = false;
  @Input() author: Author;
  @Input() authors: Author[];
  constructor(
    private route: ActivatedRoute,
    private bookService: BookService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getAuthor();
  }

  getAuthor(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.bookService
      .getAuthor(id)
      .subscribe((author) => (this.author = author));
  }

  showEditAuthorForm(): void {
    this.isShowEdit = true;
  }

  removeAuthor(author: Author): void {
    console.log(this.authors.filter((a) => a !== author));
  }

  editAuthor(author: Author): void {
    console.log(author);
  }
  goBack(): void {
    this.location.back();
  }
}
