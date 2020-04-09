import { Component, OnInit } from '@angular/core';
import { Category } from '../category';
import { CategoriesService } from '../categories.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private route: ActivatedRoute, private categoriesService: CategoriesService) {}

  categories: Category[];

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories(): void {
    this.categoriesService.getCategories().subscribe( categories => this.categories = categories);
  }

}
