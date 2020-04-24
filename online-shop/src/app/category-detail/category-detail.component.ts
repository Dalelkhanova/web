import { Component, OnInit } from '@angular/core';
import { BooksListService } from '../books-list.service';
import { Books } from '../books';
import { CartService } from '../cart.service';
import { Category } from '../category';
import { CategoriesService } from '../categories.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-category-detail',
  templateUrl: './category-detail.component.html',
  styleUrls: ['./category-detail.component.css']
})
export class CategoryDetailComponent implements OnInit {
  // tslint:disable-next-line:max-line-length
  constructor(public route: ActivatedRoute, private booksListService: BooksListService, private cartService: CartService, private categoriesService: CategoriesService) { }
  books: Books[];
  category: Category;
  selectedBooks: Books;
  categories: Category[];

  ngOnInit(): void {
    this.getListOfBooks();
    this.getCategories();
  }
  getCategories(): void {
    this.categoriesService.getCategories().subscribe( categories => this.categories = categories);
  }
  getListOfBooks() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.booksListService.getBooksByCategory(id).subscribe(books => this.books = books);
  }
  onAddToCart(books: Books): void {
    this.cartService.addBooksToCart(books).subscribe();
  }
  onSelect(books: Books): void {
    this.selectedBooks = books;
  }

}
