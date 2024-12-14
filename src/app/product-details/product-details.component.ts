import {Component, Input, OnInit} from '@angular/core';
import {ProductService} from "../services/api/products/product.service";
import {ProductRepresentation} from "../services/api/model/product-representation";
import {NgForOf, NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [
    NgForOf,
    NgOptimizedImage
  ],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent  {

 @Input()
  product : ProductRepresentation = {};


}
