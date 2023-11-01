import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CRUDService {
  private apiURL: string = 'http://localhost:3000/products';

  constructor(private http: HttpClient) {}

  //get Products
  getProducts(queryParams: string = ""): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiURL}/?${queryParams}`);
  }
}
