import { Component, OnInit } from '@angular/core';
import { Book } from "../../models/book.model";
import { BookstoreService } from "../../services/bookstore.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  public books: Book[] = [];

  constructor(private service: BookstoreService,
              private router: Router) { }

  ngOnInit(): void {
    this.service.getBooks().subscribe( books => {
      this.books = books;
    })
  }

  goToBookForm() {
    this.router.navigate(['/book-form']);
  }
}

