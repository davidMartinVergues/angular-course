import { Component, computed, inject } from '@angular/core';
import { CartService } from '../../../services/cart-service.service';

@Component({
  selector: 'order-summary',
  standalone: true,
  imports: [],
  templateUrl: './order-summary.component.html',
  styleUrl: './order-summary.component.css'
})
export class OrderSummaryComponent {

  cart_service = inject(CartService)

  total = computed(()=> {
    return this.cart_service.cart().reduce((acc,product)=> product.price+acc,0)

  })

}
