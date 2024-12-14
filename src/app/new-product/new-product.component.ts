import {Component, OnInit} from '@angular/core';
import {ProductService} from "../services/api/products/product.service";
import {ProductRepresentation} from "../services/api/model/product-representation";
import {FormsModule} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-new-product',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './new-product.component.html',
  styleUrl: './new-product.component.scss'
})
export class NewProductComponent implements OnInit{

  constructor(
    private service:ProductService,
    private router:Router
  ) {
  }

  product:ProductRepresentation={
  }

  ngOnInit(): void {

  }


  saveProduct() {
    console.log(this.product)
   this.service.saveProduct(this.product)
     .subscribe({
       next:(data)=>[
         this.router.navigate(['products'])

       ]
     })
  }
}
