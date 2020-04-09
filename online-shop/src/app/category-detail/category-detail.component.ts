import {Component, OnInit} from '@angular/core';
import {Category} from '../category';
import {CategoriesService} from '../categories.service';
import {BooksListService} from '../books-list.service';
import{ Books } from '../books'
import { ActivatedRoute } from "@angular/router";
import { CartService } from '../cart.service';

@Component({
  selector: 'app-category-detail',
  templateUrl: './category-detail.component.html',
  styleUrls: ['./category-detail.component.css']
})
export class CategoryDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute, private categoriesService: CategoriesService, private booksListService: BooksListService, private cartService: CartService) { }
  
  categories: Category[];
  books:Books[];
  category: Category;
  selectedBooks: Books;

  ngOnInit(): void {
    this.getCategories();
    this.getListOfBooks()
  }

  getCategories(): void {
    this.categoriesService.getCategories().subscribe( categories => this.categories = categories);
  }
  
  getListOfBooks() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.booksListService.getBooksByCategory(id).subscribe(books => this.books = books);
  }
  onAddToCart(books: Books): void {
    this.cartService.addBooksToCart(books)
  }
  onSelect(books: Books): void{
    this.selectedBooks = books;
  }

}
