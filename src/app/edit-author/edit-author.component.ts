import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Author } from './../author';

@Component({
  selector: 'app-edit-author',
  templateUrl: './edit-author.component.html',
  styleUrls: ['./edit-author.component.css'],
})
export class EditAuthorComponent implements OnInit {
  @Input() author: Author;
  @Input() name: string;
  @Input() biography: string;

  @Output() onEditAuthor: EventEmitter<Author> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}
  saveChangesOfAuthor() {
    this.onEditAuthor.emit(this.author);
  }
}
