import { Component, inject } from '@angular/core';
import { ProductService } from './pages/service/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  productService = inject(ProductService)
  isCartVisible:boolean=false;
  cartItems:any [] = [];
  constructor () {
    this.productService.onAddToCart$.subscribe((res:any)=>{
      this.cartItems.unshift(res)

    })
  }
  showCart(){
    this.isCartVisible = !this.isCartVisible
  }
  removeproduct(index:number){
    this.cartItems.splice(index,1)
  }
}
