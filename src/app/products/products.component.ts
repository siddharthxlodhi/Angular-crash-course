import {Component, OnInit} from '@angular/core';
import {ProductService} from "../services/api/products/product.service";
import {ProductRepresentation} from "../services/api/model/product-representation";
import {ProductDetailsComponent} from "../product-details/product-details.component";
import {NgForOf} from "@angular/common";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    ProductDetailsComponent,
    NgForOf
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {

  products: Array<ProductRepresentation> = [];

  constructor(
    private service: ProductService
  ) {
  }

  ngOnInit(): void {
    this.service.getProductWithLimit()
      .subscribe({
        next: (result) => {
          this.products = result;
        }
      });

  }

}
