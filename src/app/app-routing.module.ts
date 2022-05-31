import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
          import('./modules/product-view/product-view.module').then(
            (m) => m.ProductViewModule
          ),
      },
    ],
  },
  {
    path: 'user',
    component: BaseAuxComponent,
    children: [{ path: 'register', component: RegisterComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
