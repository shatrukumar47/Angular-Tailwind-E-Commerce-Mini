import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { CRUDService } from '../services/crud.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];
  sortBy: string = '';
  filterBy: string = '';

  constructor(private crudServices: CRUDService) {}
  ngOnInit(): void {
    this.crudServices.getProducts().subscribe((data) => {
      this.products = data;
    });
  }

  //handle Sorting
  sortByPrice() {
    if (this.sortBy) {
      this.crudServices
        .getProducts(`_sort=price&_order=${this.sortBy}`)
        .subscribe((data) => {
          this.products = data;
        });
    } else {
      this.crudServices.getProducts().subscribe((data) => {
        this.products = data;
      });
    }
  }

  //handle Filtering
  filterByCategory() {
    if (this.filterBy) {
      this.crudServices
        .getProducts(`category=${this.filterBy}`)
        .subscribe((data) => {
          this.products = data;
        });
    } else {
      this.crudServices.getProducts().subscribe((data) => {
        this.products = data;
      });
    }
  }
}
