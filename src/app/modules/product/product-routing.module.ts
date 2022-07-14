import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Roles } from '@enumerables/roles';
import { RoleGuard } from '@guards/role/role.guard';
import { ProductCreateComponent } from './components/product-create/product-create.component';
import { ProductEditComponent } from './components/product-edit/product-edit.component';
import { ProductSearchComponent } from './components/product-search/product-search.component';
import { ProductViewComponent } from './components/product-view/product-view.component';

const routes: Routes = [
  {
    path:'',
    children:[
      {path:'create',component:ProductCreateComponent,data:{roles:[Roles.Admin]}, canActivate:[RoleGuard]},
      {path:'search',component:ProductSearchComponent},
      {path:'view/:productId',component:ProductViewComponent},
      {path:'edit/:productId',component:ProductEditComponent,data:{roles:[Roles.Admin]}, canActivate:[RoleGuard]},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
