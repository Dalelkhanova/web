import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoriesComponent } from './categories/categories.component';
import { HomeComponent } from './home/home.component';
import { BooksListComponent } from './books-list/books-list.component';
import { CartComponent } from './cart/cart.component';
import { NavComponent } from './nav/nav.component';
import { BooksDetailComponent } from './books-detail/books-detail.component';
import { CategoryDetailComponent } from './category-detail/category-detail.component';
import { NavBottomComponent } from './nav-bottom/nav-bottom.component';
import { RegistrComponent } from './registr/registr.component';
import { LoginComponent } from './login/login.component';
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {AuthInterceptor} from "./auth.interceptor";
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import {FormsModule} from '@angular/forms';
import { NewBooksComponent } from './new-books/new-books.component';


@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent,
    HomeComponent,
    BooksListComponent,
    CartComponent,
    NavComponent,
    BooksDetailComponent,
    CategoryDetailComponent,
    NavBottomComponent,
    RegistrComponent,
    LoginComponent,
    NewBooksComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
   

    // HttpClientInMemoryWebApiModule.forRoot(
    //     InMemoryDataService, {dataEncapsulation: false}
    // ),
    FormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }