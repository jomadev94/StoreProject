import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowProductComponent } from './components/show-product/show-product.component';

const routes: Routes = [
  {
    path:'',
    children:[
      {path:'view',component:ShowProductComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductViewRoutingModule { }
