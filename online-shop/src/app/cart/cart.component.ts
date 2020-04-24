import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Books } from '../books';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  booksFromCart: Books[];

  constructor(private route: ActivatedRoute, private cartService: CartService) { }

  ngOnInit(): void {
    this.getBooksFromCart();
  }

  getBooksFromCart(): void {
    this.cartService.getBooksFromCart().subscribe( books => this.booksFromCart = books)
  }

  deleteBooksFromCart(books: Books) {
    this.cartService.deleteBooksFromCart(books)
  }
      

}
