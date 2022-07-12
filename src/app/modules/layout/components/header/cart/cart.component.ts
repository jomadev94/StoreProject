import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ProductBase } from '@models/productBase';
import { Notification } from '@models/view/notification';
import { CartService } from '@services/cart/cart.service';
import gsap from 'gsap';
import { CartMenuComponent } from './cart-menu/cart-menu.component';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit, AfterViewInit {
  cart: ProductBase[];
  notifications: Notification[];
  component=CartMenuComponent;

  constructor(private cartService: CartService) {
    this.notifications = [];
    this.cartService.change$.subscribe(() => {
      this.cart = this.cartService.cart;
    });
    this.cartService.notification$.subscribe(async(notification) => {
      this.notifications.push(notification);
      setTimeout(async() => {
        await gsap
          .to(`#notification_${notification.id}`, {
            duration: .5,
            translateX:0,
            opacity: 1,
            yoyo: true,
            repeat:1,
            repeatDelay:5,
            ease:"power2",
          });
          this.notifications.shift();  
      });
    });
  }

  async ngAfterViewInit(): Promise<void> {}

  ngOnInit(): void {}
}
