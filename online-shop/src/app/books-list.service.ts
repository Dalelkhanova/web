import { Injectable } from '@angular/core';
import { Books } from './books';
import { booksList} from './books-list';
import { CATEGORIES } from './categories-list';
import {Observable, of} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class BooksListService {

  books = booksList
  categories = CATEGORIES;

  constructor() { }

  getBooksList(): Observable<Books[]> {
    return of(this.books);
  }
  getBooksByCategory(id): Observable<Books[]>{
    const neededBooks = this.books.filter(book => book.category === id);
    return of(neededBooks);
  }
  getCategoryName(id): Observable<any>{
    const category = this.categories.find(c => c.id===id);
    return of(category);
  }
}
