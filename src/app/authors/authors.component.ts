import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { AuthorService } from './../author.service';

import { Author } from './../author';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css'],
})
export class AuthorsComponent implements OnInit {
  author: Author;
  selectedAuthor: Author;
  authors: Author[];

  isAddingAuthor = false;
  constructor(
    private route: ActivatedRoute,
    private authorService: AuthorService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getAuthors();
  }

  getAuthors(): void {
    this.authorService.getAuthors().subscribe((data: any[]) => {
      console.log(data);
      this.authors = data;
    });
  }

  onSelectAuthor(author: Author): void {
    this.selectedAuthor = author;
  }

  showAddAuthorForm() {
    this.isAddingAuthor = true;
  }

  addNewAuthor(author: Author): void {
    console.log(`THis is authors.comp:${author}`);
    this.authors.push(author);
  }
}
