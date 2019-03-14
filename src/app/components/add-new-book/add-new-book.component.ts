import { Component, OnInit } from '@angular/core';
import { Book } from '../../models/book';
@Component({
  selector: 'app-add-new-book',
  templateUrl: './add-new-book.component.html',
  styleUrls: ['./add-new-book.component.scss']
})
export class AddNewBookComponent implements OnInit {

  private newBook: Book = new Book();
  private bookAdded: boolean;


  constructor() { }

  ngOnInit() {
  }

}
