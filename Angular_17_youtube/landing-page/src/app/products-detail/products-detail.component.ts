import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {productList,Product} from '../products/products.mock'
import { timeout } from 'rxjs';

@Component({
  selector: 'app-products-detail',
  templateUrl: './products-detail.component.html',
  styleUrls: ['./products-detail.component.css']
})
export class ProductsDetailComponent implements OnInit{

  product?: Product;
  color:string='';
  loading : boolean = true;

  productList: Product[] = productList;

  constructor( private _route: ActivatedRoute){}

  ngOnInit(): void {
    this._route.params.subscribe(params => {

      setTimeout(()=>{
        this.product = this.productList.find(product => product.id == params['productId']);
        this.color = params['style'];
        this.loading =false;
      },1500)
      
    })
  }

}
