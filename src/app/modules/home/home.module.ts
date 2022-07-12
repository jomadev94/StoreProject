import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesComponent } from './components/categories/categories.component';
import { PromotionsComponent } from './components/promotions/promotions.component';
import { HomeComponent } from './home.component';
import { ItemCarouselComponent } from './components/item-carousel/item-carousel.component';
import { ItemCardComponent } from './components/item-carousel/item-card/item-card.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SharedModule } from '@modules/shared/shared.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    CategoriesComponent,
    PromotionsComponent,
    ItemCarouselComponent,
    ItemCardComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FontAwesomeModule,
    SharedModule
  ],
  exports:[
    HomeComponent,
    ItemCardComponent,
  ]
})
export class HomeModule { }
