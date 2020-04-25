import { Component, OnInit } from '@angular/core';
import { Books } from '../books';
import { Category } from '../category';
import { BooksListService } from '../books-list.service';
import { CartService } from '../cart.service';
import { ActivatedRoute } from '@angular/router';
import { CategoriesService } from '../categories.service';

@Component({
  selector: 'app-new-books',
  templateUrl: './new-books.component.html',
  styleUrls: ['./new-books.component.css']
})
export class NewBooksComponent implements OnInit {

  logged = false;

  username = '';
  password = '';

  constructor(private route: ActivatedRoute, private booksListService: BooksListService, private cartService: CartService, private categoriesService: CategoriesService) { }

  booksList: Books[];
  categories: Category[];
  books: Books[];
  selectedBooks: Books;

  ngOnInit(): void {
    this.getNewBooksList();
    // this.getListOfBooks();
    const token = localStorage.getItem('token');
    if (token) {
      this.logged = true;
    }
  }

  getNewBooksList(): void {
    this.booksListService.getNewBooksList().subscribe( books => this.booksList = books);
  }

  onAddToCart(books: Books): void {
    this.cartService.addBooksToCart(books);
  }


  onSelect(books: Books): void {
    this.selectedBooks = books;
  }

  login() {
    this.categoriesService.login(this.username, this.password).subscribe(res => {

      localStorage.setItem('token', res.token);

      this.logged = true;

      this.username = '';
      this.password = '';
    });
  }

}
