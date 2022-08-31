import {
  Component,
  OnDestroy,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Categories } from '@enumerables/categories';
import { Roles } from '@enumerables/roles';
import { Product } from '@models/product';
import { Button } from '@models/view/button';
import { DeleteModalComponent } from '@modules/shared/components/modals/delete-modal/delete-modal.component';
import { CartService } from '@services/cart/cart.service';
import { ProductService } from '@services/product/product.service';
import { ToDeleteService } from '@services/toDelete/to-delete.service';
import { DATA_ANY, DATA_ID, DATA_KEY, DATA_TITLE } from '@static/data';
import { Globals } from '@static/globals';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-show-product',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.scss'],
})
export class ProductViewComponent implements OnDestroy {
  
  buttons: Button[] = [
    {
      text: 'eliminar',
      icon: 'trash-can',
      roles: [Roles.Admin],
      component: DeleteModalComponent,
    },
    {
      text: 'editar',
      href: '/product/edit/',
      icon: 'pen-to-square',
      roles: [Roles.Admin],
    },
    Globals.buttons['home']
  ];

  product:Product;
  sub$:Subscription;
  sub2$: Subscription;

  constructor(private router:Router, 
    private route:ActivatedRoute,
    private productService:ProductService,
    private deleteService:ToDeleteService,
    private cartService:CartService
    ){
    const productId=this.route.snapshot.params["productId"];
    this.buttons[1].href += productId;
    const categories=Object.values(Categories).filter(c=> c != "Todas");
    this.sub$=this.productService.findById(productId).subscribe(res=>{
      if(res.success){
        this.product=res.data;
        this.product.category=Object.values(categories)[parseInt(this.product.category)];
        this.buttons[0].providers=[
          {provide:DATA_ID, useValue:productId},
          {provide:DATA_ANY, useValue:this.product.name},
          {provide:DATA_TITLE, useValue:"Eliminar producto"},
          {provide:DATA_KEY, useValue:"Product"},
        ]
        return
      }
      this.router.navigate(["user/alert/not-found"]);
    });
    this.deleteService.deleted$.subscribe(res=>{
      if(res === "Product"){
        this.router.navigate(["product/search"]);
      }
    })

  }

  addCart(){
    this.cartService.addProduct({
      productId:this.product.productId,
      name: this.product.name,
      price: this.product.price,
      discount: this.product.discount,
      stock: this.product.stock
    });
  }

  ngOnDestroy(): void {
    this.sub$.unsubscribe();
    if(this.sub2$){
      this.sub2$.unsubscribe();
    }
  }

}
