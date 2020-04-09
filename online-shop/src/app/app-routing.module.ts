import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CategoriesComponent } from './categories/categories.component';
import { BooksListComponent } from './books-list/books-list.component';
import { CartComponent } from './cart/cart.component';
import { BooksDetailComponent } from './books-detail/books-detail.component';
import { CategoryDetailComponent } from './category-detail/category-detail.component';
import { RegistrComponent } from './registr/registr.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  { path : '', component: HomeComponent},
  { path: 'categories', component: CategoriesComponent },
  { path: 'categories/:id', component: CategoryDetailComponent },
  { path: 'books', component: BooksListComponent },
  { path: 'cart', component: CartComponent },
  { path: 'books/:booksId', component: BooksDetailComponent },
  { path: 'registr', component: RegistrComponent },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
