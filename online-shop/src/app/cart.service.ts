import { Injectable } from '@angular/core';
import { Books } from './books';
import {Observable, of} from 'rxjs';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart: Books[] = [];
  constructor() { }

  addBooksToCart(books: Books) {
    this.cart.push(books)
  }

  getBooksFromCart(): Observable<Books[]> {
    return of(this.cart);
  }

  deleteBooksFromCart(books: Books){
    for (let i = 0; i < this.cart.length; i++) {
        if (this.cart[i].id == books.id) {
            this.cart.splice(i,1)
        }
    }
    this.cart.find(books => books.id == books.id)
  }
}