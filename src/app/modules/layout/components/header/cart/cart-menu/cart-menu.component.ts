import { OverlayRef } from '@angular/cdk/overlay';
import { Component, Inject, OnInit } from '@angular/core';
import { ProductBase } from '@models/productBase';
import { CartService } from '@services/cart/cart.service';
import { DATA_OVREF } from '@static/data';

@Component({
  selector: 'app-cart-menu',
  templateUrl: './cart-menu.component.html',
  styleUrls: ['./cart-menu.component.scss']
})
export class CartMenuComponent implements OnInit {

  cart:ProductBase[];
  total:number;

  constructor(@Inject(DATA_OVREF) public ovRef:OverlayRef, private cartService:CartService) {
    this.cartService.change$.subscribe(()=>{
      this.cart=this.cartService.cart;
      this.total=0;
      for (const product of this.cart) {
        this.total += product.price - (product.price * product.discount/100);
      }
    })
  }

  remove(event:Event){
    console.log(event);
    const productId=(event.target as HTMLElement).id;
    console.log(productId);
    this.cartService.removeProduct(productId);
    this.ovRef.detach();
  }

  ngOnInit(): void {
  }

}
