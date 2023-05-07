import { createAction, props } from '@ngrx/store';
import { Book } from "../models/book.model";

export const loadBooks = createAction('[Bookstore] Load Books');

export const loadBooksSuccess = createAction(
  '[Bookstore] Load Books Success',
  props<{ books: Book[] }>()
);

export const addBook = createAction(
  '[Bookstore] Add Book',
  props<{ book: Book }>()
);

export const addBookSuccess = createAction(
  '[Bookstore] Add Book Success',
  props<{ book: Book }>()
);
