import { Component, OnInit, signal } from '@angular/core';
import { Product } from '../../models/product.mnodel';
import { ProductCardComponent } from "../product-card/product-card.component";

@Component({
  selector: 'products-list',
  standalone: true,
  imports: [ProductCardComponent],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.css'
})
export class ProductsListComponent implements OnInit{

  product_list = signal<Product[]>([])

  async ngOnInit(){

    let response = await fetch('https://fakestoreapi.com/products')
    let data = await response.json()

    this.product_list.set(data.map((item:any) => ({
      id: item.id,
      title: item.title,
      image: item.image,
      price: item.price,
      stock: item.rating.count
    })))
  }
}
