import { Injectable } from '@angular/core';
import { ProductBase } from '@models/productBase';
import { Notification } from '@models/view/notification';
import { StorageService } from '@services/storage/storage.service';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { v4 as uuid } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart:ProductBase[];
  private change:BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);
  private notification:Subject<Notification> = new Subject<Notification>();
  change$=this.change as Observable<boolean>;
  notification$=this.notification as Observable<Notification>;

  constructor(private storageService:StorageService) {
    this.cart=this.getCart();
    if(this.cart != null){
      this.change.next(true);
    }
  }

  private getCart():ProductBase[]{
    const products=this.storageService.retrive('cart');
    return products != null? products:[];
  }

  private searchProduct(productId:string){
    return this.cart.findIndex(p => p.productId === productId);
  }

  private saveChange(){
    this.storageService.save('cart',this.cart);
    this.change.next(true);
  }

  addProduct(product:ProductBase){
    this.cart=this.getCart();
    if(this.cart.length=== 7){
      this.notification.next({id:uuid(),msg:"Cantidad máxima de productos agregados al carrito."});
      return
    }
    if(this.searchProduct(product.productId) >= 0){
      this.notification.next({id:uuid(),msg:"El producto ya se encuentra en el carrito."})
      return
    }
    this.cart.push(product);
    this.saveChange();
    this.notification.next({id:uuid(), msg:`El producto ${product.name} fue agregado al carrito`});
  }

  removeProduct(productId:string){
    this.cart=this.getCart();
    const index= this.searchProduct(productId);
    if(index >= 0){
      const oldProduct=this.cart[index];
      this.cart.splice(index,1);
      this.saveChange();
      this.notification.next({id:uuid(), msg:`El producto ${oldProduct.name} se elimino del carrito`});
    }
  }

}
