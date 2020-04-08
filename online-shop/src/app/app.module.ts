import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NavComponent } from './nav/nav.component';
import { CartComponent } from './cart/cart.component';
import { NavBottomComponent } from './nav-bottom/nav-bottom.component';
import { CategoriesComponent } from './categories/categories.component';
import { CategoryDetailComponent } from './category-detail/category-detail.component';
import { ClothesDetailComponent } from './clothes-detail/clothes-detail.component';
import { ClothesListComponent } from './clothes-list/clothes-list.component';
import { RegistrComponent } from './registr/registr.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavComponent,
    CartComponent,
    NavBottomComponent,
    CategoriesComponent,
    CategoryDetailComponent,
    ClothesDetailComponent,
    ClothesListComponent,
    RegistrComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
