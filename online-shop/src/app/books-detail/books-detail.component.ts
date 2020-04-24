import { Component, OnInit } from '@angular/core';
import { Books } from '../books';
import { BooksListService } from '../books-list.service';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart.service';
import {CategoriesService} from '../categories.service';
import {Category} from '../category';
@Component({
  selector: 'app-books-detail',
  templateUrl: './books-detail.component.html',
  styleUrls: ['./books-detail.component.css']
})
export class BooksDetailComponent implements OnInit {

  booksList: Books[];
  selectedBooksId: string;
  categories: Category[];

  constructor(private route: ActivatedRoute, private booksListService: BooksListService, private cartService: CartService, private categoriesService: CategoriesService) { }

  ngOnInit(): void {
    this.getBooksList();
    this.getCategories();
    this.route.paramMap.subscribe(params => {
      this.selectedBooksId = params.get('booksId');
    });
  }


getCategories(): void {
  this.categoriesService.getCategories().subscribe( categories => this.categories = categories);
}
  getBooksList(): void {
    this.booksListService.getBooksList().subscribe( books => this.booksList = books);
  }

  onAddToCart(books: Books): void {
    this.cartService.addBooksToCart(books as Books).subscribe(book => {this.booksList.push(book)});
  }

}
