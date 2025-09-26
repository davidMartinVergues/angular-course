import { Component, inject, input } from '@angular/core';
import { Product } from '../../models/product.mnodel';
import { PrimaryButtonComponent } from "../../components/primary-button/primary-button.component";
import { CartService } from '../../services/cart-service.service';

@Component({
  selector: 'product-card',
  standalone: true,
  imports: [PrimaryButtonComponent, PrimaryButtonComponent],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {

  cart_service = inject(CartService)

  product = input.required<Product>()

}
