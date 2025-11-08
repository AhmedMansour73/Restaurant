import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Category} from "../model/category";
import {map} from "rxjs/operators";
import {Product} from "../model/product";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  url = 'http://localhost:9090/products';

  constructor(private http: HttpClient) {}

  getAllProducts(): Observable<Product[]>{
    return this.http.get<Product[]>(this.url + "/all-products").pipe(
      map(
        response => response
      )
    );
  }

  getProductsByCategoryID(id): Observable<Product[]>{
    return this.http.get<Product[]>(this.url + "/searchByCategoryId/" + id).pipe(
      map(
        response => response
      )
    );
  }

  searchByProductName(word): Observable<Product[]>{
    return this.http.get<Product[]>(this.url + "/search?keyword=" + word).pipe(
      map(
        response => response
      )
    );
  }

}
