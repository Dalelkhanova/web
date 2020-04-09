import { Injectable } from '@angular/core';
import { Books } from './books';
import {Observable, of} from 'rxjs';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BooksListService {

  private booksUrl = 'api/books';
  private categoriesUrl = 'api/categories';
  books: Books[];

  constructor(
    private http: HttpClient) { }

  getBooksList(): Observable<Books[]> {
    return this.http.get<Books[]>(this.booksUrl);
  }
  getBooksByCategory(id: number): Observable<Books[]> {
    const url = `${this.booksUrl}/?category=${id}`;
    return this.http.get<Books[]>(url);
  }
  getCategoryName(id: number): Observable<any> {
    const url = `${this.categoriesUrl}/${id}`;
    return this.http.get(url);
  }
}
