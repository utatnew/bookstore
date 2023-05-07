import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {Observable} from "rxjs";
import {Book} from "../models/book.model";

@Injectable({
  providedIn: 'root'
})
export class BookstoreService {
  private booksUrl = '/assets/books.json';

  constructor(private http: HttpClient) { }

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.booksUrl);
  }

  addBook(book: Book): Observable<Book> {
    return this.http.post<Book>(this.booksUrl, book);
  }
}
