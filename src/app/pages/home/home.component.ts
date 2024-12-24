import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
CategoryList = ['Laptop', 'IPad', 'Monitor', 'Camera', 'HeadPhones', 'Mobile'];
productList = [
  { productId: 1, rating: 3, isOffer: false, productName: 'HP Notebook', category: 'Laptop', price: 20000, discount: 25, availableQty: 12, imageUrl: 'https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/4.webp' },
  { productId: 2, rating: 4, isOffer: false, productName: 'HP Envy', category: 'Laptop', price: 1258, discount: 20, availableQty: 6, imageUrl: 'https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/7.webp' },
  { productId: 3, rating: 2, isOffer: true, productName: 'Toshiba B77', category: 'Monitor', price: 34000, discount: 30, availableQty: 0, imageUrl: 'https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/3.webp' },
  { productId: 4, rating: 5, isOffer: false, productName: 'HP iPad', category: 'IPad', price: 7600, discount: 5, availableQty: 8, imageUrl: 'https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/1.webp' },
  { productId: 5, rating: 5, isOffer: true, productName: 'HP iPad-Max', category: 'IPad', price: 5700, discount: 6, availableQty: 12, imageUrl: 'https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/2.webp' },
  { productId: 6, rating: 3, isOffer: false, productName: 'T Wide Monitor', category: 'Monitor', price: 12360, discount: 23, availableQty: 23, imageUrl: 'https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/3.webp' },
  { productId: 7, rating: 1, isOffer: false, productName: 'Mobile', category: 'Mobile', price: 34500, discount: 5, availableQty: 5, imageUrl: 'https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/11.webp' },
  { productId: 8, rating: 5, isOffer: false, productName: 'Sony Camera', category: 'Mobile', price: 42300, discount: 21, availableQty: 0, imageUrl: 'https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/8.webp' },
  { productId: 9, rating: 3, isOffer: true, productName: 'Boat Max-252', category: 'Camera', price: 5000, discount: 30, availableQty: 7, imageUrl: 'https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/9.webp' },
  { productId: 10, rating: 2, isOffer: false, productName: 'Lenovo 3D Monitor', category: 'HeadPhones', price: 5700, discount: 22, availableQty: 11, imageUrl: 'https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/10.webp' },
  { productId: 11, rating: 4, isOffer: false, productName: 'JBL 580', category: 'HeadPhones', price: 5600, discount: 54, availableQty: 0, imageUrl: 'https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/16.webp' },
  { productId: 12, rating: 3, isOffer: false, productName: 'Samsung G12', category: 'Laptop', price: 28000, discount: 60, availableQty: 10, imageUrl: 'https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/7.webp' },
  { productId: 13, rating: 4, isOffer: false, productName: 'Dell Asp-343', category: 'Laptop', price: 67000, discount: 15, availableQty: 18, imageUrl: 'https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/12.webp' }
];
filteredProdcuts :any [] = [] ;
selectedProducts : string = '';
constructor(){
  this.filteredProdcuts = this.productList
}
FilterCategory(category:string){
  if(this.selectedProducts == category){
    this.selectedProducts  = '';
    this.filteredProdcuts = this.productList;
  }else{
    this.selectedProducts  = category;
    const products = this.productList.filter(prod => prod.category == category);
    this.filteredProdcuts = products;
  }


}

}
