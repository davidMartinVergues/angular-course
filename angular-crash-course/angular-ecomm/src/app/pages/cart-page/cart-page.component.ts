import { Component, inject, signal } from '@angular/core';
import { CartService } from '../../services/cart-service.service';
import { Product } from '../../models/product.mnodel';
import { PrimaryButtonComponent } from '../../components/primary-button/primary-button.component';
import { NgClass } from "@angular/common";
import { OrderSummaryComponent } from "./order-summary/order-summary.component";

@Component({
  selector: 'app-cart-page',
  standalone: true,
  imports: [PrimaryButtonComponent, OrderSummaryComponent],
  templateUrl: './cart-page.component.html',
  styleUrl: './cart-page.component.css'
})
export class CartPageComponent {

  cart_service = inject(CartService)
}
