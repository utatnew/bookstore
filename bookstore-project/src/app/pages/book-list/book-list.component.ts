import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Book} from "../../models/book.model";
import {Observable} from "rxjs";

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  public books: Book[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getBooks().subscribe(books => {
      this.books = books;
    });
  }

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>('/assets/books.json');
  }

}
