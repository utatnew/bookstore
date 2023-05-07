import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookListComponent } from './pages/book-list/book-list.component';
import { BookFormComponent } from './pages/book-form/book-form.component';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BookstoreService } from "./services/bookstore.service";
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import {bookstoreReducer} from "./store/bookstore.reducer";
import { BookstoreEffects } from './store/bookstore.effects';


@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    BookFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot({ bookstore: bookstoreReducer }),
    EffectsModule.forRoot([BookstoreEffects])
  ],
  providers: [BookstoreService],
  bootstrap: [AppComponent]
})
export class AppModule { }
