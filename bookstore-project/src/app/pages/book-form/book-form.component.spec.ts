import 'zone.js';
import 'zone.js/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BookFormComponent } from './book-form.component';
import {ReactiveFormsModule} from "@angular/forms";
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from "@angular/platform-browser-dynamic/testing";

TestBed.initTestEnvironment(BrowserDynamicTestingModule, platformBrowserDynamicTesting());

describe('BookFormComponent', () => {
  let component: BookFormComponent;
  let fixture: ComponentFixture<BookFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [ BookFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create a form with the title, author, and publicationDate fields', () => {
    expect(component.bookForm.get('title')).toBeTruthy();
    expect(component.bookForm.get('author')).toBeTruthy();
    expect(component.bookForm.get('publicationDate')).toBeTruthy();
  });

  it('should require the title and author fields', () => {
    const titleControl = component.bookForm.get('title');
    const authorControl = component.bookForm.get('author');
    titleControl?.setValue('');
    authorControl?.setValue('');
    expect(titleControl?.valid).toBeFalsy();
    expect(authorControl?.valid).toBeFalsy();
    expect(component.bookForm.valid).toBeFalsy();
  });

  it('should validate the publicationDate field', () => {
    const publicationDateControl = component.bookForm.get('publicationDate');
    publicationDateControl?.setValue('05-07-2021');
    expect(publicationDateControl?.valid).toBeTruthy();
    publicationDateControl?.setValue('05/07/2021');
    expect(publicationDateControl?.valid).toBeFalsy();
  });

});
