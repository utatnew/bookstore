import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from "@angular/forms";
import { Router } from "@angular/router";
import { Book } from "../../models/book.model";
import { Store } from "@ngrx/store";
import { addBook } from '../../store/bookstore.actions';
import {BookstoreService} from "../../services/bookstore.service";

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent implements OnInit {
  bookForm: FormGroup;
  result: any;

  newBook: Book = { title: '', author: '', publicationDate: ''};

  book: Book = {
    title: '',
    author: '',
    publicationDate: ''
  };

  constructor(private fb: FormBuilder,
              private router: Router,
              private store: Store,
              private bookstoreService: BookstoreService) {
    this.bookForm = this.fb.group({
      title: ['', [Validators.required, Validators.maxLength(50)]],
      author: ['', [Validators.required, Validators.maxLength(50)]],
      publicationDate: ['', Validators.pattern(/^\d{2}\-\d{2}\-\d{4}$/)]
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.bookForm.value);
    this.addBook(this.bookForm.value);
    this.router.navigate(['/book-list']);
  }

  get f() {
    return this.bookForm.controls;
  }

  addBook(book: Book): void {
    this.bookstoreService.addBook(book).subscribe(
      data => {
        console.log('Book created succesfully', data);
        this.store.dispatch(addBook({ book: data }));
        this.newBook = { title: '', author: '', publicationDate: '' };
      },
      error => {
        console.log('Error creating book', error);
      }
    );

  }

}
