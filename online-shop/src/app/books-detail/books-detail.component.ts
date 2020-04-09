import { Component, OnInit } from '@angular/core';
import { Books } from '../books';
import {CategoriesService} from '../categories.service';
import {Category} from '../category';
import { BooksListService } from '../books-list.service';
import { ActivatedRoute } from "@angular/router";
import { CartService } from '../cart.service';

@Component({
  selector: 'app-books-detail',
  templateUrl: './books-detail.component.html',
  styleUrls: ['./books-detail.component.css']
})
export class BooksDetailComponent implements OnInit {

  categories: Category[];
  booksList: Books[]
  selectedBooksId: String

  constructor(private route: ActivatedRoute, private categoriesService: CategoriesService, private booksListService: BooksListService, private cartService: CartService) { }

  ngOnInit(): void {
    this.getCategories();
    this.getBooksList();
    this.route.paramMap.subscribe(params => {
      this.selectedBooksId = params.get("booksId")
    })
  }
  getCategories(): void {
    this.categoriesService.getCategories().subscribe( categories => this.categories = categories)
  }  

  getBooksList(): void {
    this.booksListService.getBooksList().subscribe( books => this.booksList = books)
  }

  onAddToCart(books: Books): void {
    this.cartService.addBooksToCart(books)
  }

}
