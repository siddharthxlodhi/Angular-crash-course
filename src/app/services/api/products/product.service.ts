import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ProductRepresentation} from "../model/product-representation";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
private http:HttpClient
  ) {
  }

  private baseUrl: String = 'https://fakestoreapi.com/';

  getProductWithLimit(limit: number = 15) {
    const url: string =`${this.baseUrl}products?limit=${limit}`;
    return this.http.get<Array<ProductRepresentation>>(url);
  }

  saveProduct(product:ProductRepresentation){
    const url: string =`${this.baseUrl}products`;
return this.http.post<ProductRepresentation>(url,product);
  }

}
