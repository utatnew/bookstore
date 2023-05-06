import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookListComponent } from "./pages/book-list/book-list.component";
import { AddBookComponent } from "./pages/add-book/add-book.component";

const routes: Routes = [
  { path: 'book-list', component: BookListComponent },
  { path: 'add_book', component: AddBookComponent },
  { path: '',   redirectTo: '/book-list', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
