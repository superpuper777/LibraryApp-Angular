import { Component, OnInit } from '@angular/core';
import { AUTHORS } from './../mock-authors';
import { Author } from './../author';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css'],
})
export class AuthorsComponent implements OnInit {
  author: Author;
  selectedAuthor: Author;
  authors = AUTHORS;

  isAuthorSelected = false;
  constructor() {}

  ngOnInit(): void {}

  onSelectAuthor(author: Author): void {
    this.selectedAuthor = author;
    console.log(author);
    // this.isAuthorSelected = true;
  }
}
