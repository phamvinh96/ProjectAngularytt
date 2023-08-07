import { Component } from '@angular/core';
import { ProductService } from '../_service/product.service';
import { Product } from '../class/product';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent {
  addProductMessage: string | undefined;
  constructor(private product: ProductService) {}

  ngOnInit(): void {}

  submit(data: Product) {
    this.product['addProduct'](data).subscribe((result: any) => {
      console.warn(result);
      if (result) {
        this.addProductMessage = 'Product is added successfully';
        alert('Add Product successfully')
        
      }
    });

    setTimeout(() => {
      this.addProductMessage=undefined
    }, 3000);
  }
}

