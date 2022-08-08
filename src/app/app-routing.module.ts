import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Roles } from '@enumerables/roles';
import { RoleGuard } from '@guards/role/role.guard';
import { ValidateComponent } from '@modules/alert/components/validate/validate.component';
import { HomeComponent } from './modules/home/home.component';
import { BaseAuxComponent } from './modules/layout/components/base-aux/base-aux.component';
import { BaseComponent } from './modules/layout/components/base/base.component';
import { RegisterComponent } from './modules/register/components/register/register.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: '',
    component: BaseComponent,
    children: [
      { path: 'home', component: HomeComponent },
      {
        path: 'product',
        loadChildren: () =>
          import('@modules/product/product.module').then(
            (m) => m.ProductModule
          ),
      },
    ],
  },
  {
    path: 'user',
    component: BaseAuxComponent,
    children: [
      { path: 'register', component: RegisterComponent, data:{roles:[Roles.NoAuth]}, canActivate:[RoleGuard]},
      { path: 'activate/:key', component: ValidateComponent},
      {
        path:'alert',
        loadChildren:()=>import('@modules/alert/alert.module').then((m)=>m.AlertModule)
      }
    ],
  },
  {
    path: '**',
    redirectTo:'user/alert/not-found',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled', onSameUrlNavigation: 'reload', initialNavigation: 'enabledBlocking' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
