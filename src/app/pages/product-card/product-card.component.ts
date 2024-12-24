import { Component, inject, Input } from '@angular/core';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
  @Input() product : any;
  productService = inject(ProductService)
  getDiscountedPrice(product:any){
    const totallValue = product.price * ((100 - product.discount) / 100)
    return totallValue.toFixed(0)
  }
  AddToCart(productData:any){
    this.productService.onAddToCart$.next(productData)
  }
}
