
import { createReducer, on} from '@ngrx/store';
import { Book } from '../models/book.model';
import { addBook, addBookSuccess } from "./bookstore.actions";

export interface BookstoreState {
  books: Book[];
}

export const initialState: BookstoreState = {
  books: []
};

export const bookstoreReducer = createReducer(
  initialState,
  on(addBook, (state, { book }) => ({ ...state, books: [...state.books, book] })),
  on(addBookSuccess, (state, { book }) => ({ ...state, books: [...state.books, book] }))
);

