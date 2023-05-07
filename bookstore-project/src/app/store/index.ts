import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { bookstoreReducer } from "./bookstore.reducer";

@NgModule({
  imports: [
    StoreModule.forRoot({
      books: bookstoreReducer
    })
  ],
})
export class AppStoreModule {}

