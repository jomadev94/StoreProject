import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '@models/product';
import { ProductService } from '@services/product/product.service';
import { Globals } from '@static/globals';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit, OnDestroy {

  product$:Subscription;
  product:Product;
  buttons=[Globals.buttons['home']];

  constructor(private route:ActivatedRoute, private productService:ProductService, private router:Router) {
    const productId=this.route.snapshot.params["productId"];
    this.product$=this.productService.findById(productId).subscribe(res=>{
      if(res.success){
        this.product=res.data;
        return;
      }
      this.router.navigate(['/user/alert/not-found']);
    });
  }
  
  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.product$.unsubscribe();
  }


}
