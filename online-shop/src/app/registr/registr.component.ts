import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../categories.service';

@Component({
  selector: 'app-registr',
  templateUrl: './registr.component.html',
  styleUrls: ['./registr.component.css']
})
export class RegistrComponent implements OnInit {

  username = '';
  password = '';

  constructor(private categoriesService: CategoriesService) { }

  ngOnInit(): void {
  }

  registr() {
    this.categoriesService.registr(this.username, this.password).subscribe(res => {
      this.username = '';
      this.password = '';
    });
  }

}
