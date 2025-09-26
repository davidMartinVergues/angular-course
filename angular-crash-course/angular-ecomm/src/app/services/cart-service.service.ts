import { Injectable, signal } from '@angular/core';
import { Product } from '../models/product.mnodel';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart = signal<Product[]>([])

  addToCart(product: Product) {

    this.cart.update(products => [...products, product]);
    // tb podemos hacer:
    //this.cart.set([...this.cart(), product])
  }

  delFromCart(product_id:number){

    this.cart.update(products => products.filter(product=>product.id!=product_id))

  }

  constructor() {

  }
}
