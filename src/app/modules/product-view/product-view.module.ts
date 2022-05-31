import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductViewRoutingModule } from './product-view-routing.module';
import { ShowProductComponent } from './components/show-product/show-product.component';


@NgModule({
  declarations: [
    ShowProductComponent
  ],
  imports: [
    CommonModule,
    ProductViewRoutingModule
  ],
  exports:[
    ShowProductComponent
  ]
})
export class ProductViewModule { }
