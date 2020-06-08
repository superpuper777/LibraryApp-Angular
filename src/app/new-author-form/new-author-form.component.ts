import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Author } from './../author';

@Component({
  selector: 'app-new-author-form',
  templateUrl: './new-author-form.component.html',
  styleUrls: ['./new-author-form.component.css'],
})
export class NewAuthorFormComponent implements OnInit {
  author: Author;
  name = '';
  biography = '';
  id = Math.floor(Math.random() * 100);

  @Output() onAddNewAuthor: EventEmitter<Author> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  addNewAuthor() {
    if (this.name.trim() && this.biography.trim()) {
      const author: Author = {
        id: this.id,
        name: this.name,
        biography: this.biography,
        books: [],
      };

      this.onAddNewAuthor.emit(author);
      console.log(author);
      this.name = this.biography = '';
    }
  }
}
