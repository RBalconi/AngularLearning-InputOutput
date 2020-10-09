import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent {
  @Input('data') user: any;
  @Output() deleteUser = new EventEmitter<number>();

  constructor() {}

  delete(id: number) {
    this.deleteUser.emit(id);
  }
}
