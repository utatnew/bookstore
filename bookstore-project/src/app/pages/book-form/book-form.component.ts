import { Component, OnInit } from '@angular/core';
import {FormGroup, Validators, FormBuilder} from "@angular/forms";



@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent implements OnInit {
  bookForm: FormGroup;

  constructor(private fb: FormBuilder) {
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
  }

  get f() {
    return this.bookForm.controls;
  }

}
