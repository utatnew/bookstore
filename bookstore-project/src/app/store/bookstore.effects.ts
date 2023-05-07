import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap, switchMap, map } from 'rxjs/operators';
import { BookstoreService } from "../services/bookstore.service";
import { addBook, addBookSuccess, loadBooks, loadBooksSuccess } from './bookstore.actions';
import { Book } from "../models/book.model";


@Injectable()
export class BookstoreEffects {

  loadBooks$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadBooks),
      switchMap(() => this.bookstoreService.getBooks()),
      map(books => loadBooksSuccess({ books }))
    );
  });

  addBook$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addBook),
      mergeMap(action =>
        this.bookstoreService.addBook(action.book).pipe(
          map((book: Book) => addBookSuccess({ book }))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private bookstoreService: BookstoreService
  ) {}
}
