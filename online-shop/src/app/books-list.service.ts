import { Injectable } from '@angular/core';
import { Books } from './books';
import {Observable} from 'rxjs';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BooksListService {

  private booksUrl = 'http://127.0.0.1:8000/api/books';
  private categoriesUrl = 'http://127.0.0.1:8000/api/categories';
  books: Books[];

  constructor(
    private http: HttpClient) { }

  getBooksList(): Observable<Books[]> {
    return this.http.get<Books[]>(this.booksUrl);
  }
  getBooksByCategory(id: number): Observable<Books[]> {
    return this.http.get<Books[]>(`http://127.0.0.1:8000/api/categories/${id}/books`);
  }
  getCategoryName(id: number): Observable<any> {
    const url = `${this.categoriesUrl}/${id}`;
    return this.http.get(url);
  }
  getNewBooksList(): Observable<Books[]> {
    return this.http.get<Books[]>("http://127.0.0.1:8000/api/books/new");
  }
  
}
