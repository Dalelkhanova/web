import { Component, OnInit } from '@angular/core';
import { Books } from '../books';
import { Category } from '../category';
import { BooksListService } from '../books-list.service';
import { CartService } from '../cart.service';
import { ActivatedRoute } from "@angular/router";
import { CategoriesService } from '../categories.service';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css']
})
export class BooksListComponent implements OnInit {

  constructor(private route: ActivatedRoute, private booksListService: BooksListService, private cartService: CartService,private categoriesService: CategoriesService) { }
  
  booksList: Books[]
  categories: Category[]
  books:Books[]
  selectedBooks: Books

  ngOnInit(): void {
    this.getBooksList()
    this.getCategories()
    this.getListOfBooks()
  }

  getCategories(): void {
    this.categoriesService.getCategories().subscribe( categories => this.categories = categories)
  }
  getListOfBooks() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.booksListService.getBooksByCategory(id).subscribe(books => this.books = books);
  }

  getBooksList(): void {
    this.booksListService.getBooksList().subscribe( books => this.booksList = books)
  }

  onAddToCart(books: Books): void {
    this.cartService.addBooksToCart(books)
  }

  onSelect(books: Books): void{
    this.selectedBooks = books;
  }

}
