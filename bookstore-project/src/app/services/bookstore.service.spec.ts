import 'zone.js';
import 'zone.js/testing';
import { TestBed } from '@angular/core/testing';
import { BookstoreService } from './bookstore.service';
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from "@angular/platform-browser-dynamic/testing";

TestBed.initTestEnvironment(BrowserDynamicTestingModule, platformBrowserDynamicTesting());

describe('BookService', () => {
  let service: BookstoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookstoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

});
