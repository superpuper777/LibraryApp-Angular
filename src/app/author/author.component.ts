import { Component, OnInit, Input } from '@angular/core';
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
  constructor() {}

  ngOnInit(): void {}

  showEditAuthorForm(): void {
    this.isShowEdit = true;
  }

  removeAuthor(author: Author): void {
    console.log(this.authors.filter((a) => a !== author));
  }

  editAuthor(author: Author): void {
    console.log(author);
  }
}
