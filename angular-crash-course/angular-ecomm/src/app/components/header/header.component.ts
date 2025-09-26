import { Component, inject, signal } from '@angular/core';
import { PrimaryButtonComponent } from '../primary-button/primary-button.component';
import { CartService } from '../../services/cart-service.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'header',
  standalone: true,
  imports: [PrimaryButtonComponent,RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  title = signal('My Store')

  cart_service = inject(CartService);


  showButtonClicked(){
   // this.cart_service.addToCart();


  }

}
