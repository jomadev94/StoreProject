import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './components/main/main.component';
import { HeaderAuxComponent } from './components/header-aux/header-aux.component';
import { FooterComponent } from './components/footer/footer.component';
import { LogoSliderComponent } from './components/footer/logo-slider/logo-slider.component';
import { CartComponent } from './components/header/cart/cart.component';
import { SearcherComponent } from './components/header/searcher/searcher.component';
import { HeaderComponent } from './components/header/header.component';
import { MobileNavComponent } from './components/header/mobile-nav/mobile-nav.component';
import { BaseComponent } from './components/base/base.component';
import { BaseAuxComponent } from './components/base-aux/base-aux.component';
import { MainCarouselComponent } from './components/base/main-carousel/main-carousel.component';
import { SharedModule } from '@modules/shared/shared.module';
import { OverlayModule } from '@angular/cdk/overlay';
import { A11yModule } from '@angular/cdk/a11y';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { CartMenuComponent } from './components/header/cart/cart-menu/cart-menu.component';

@NgModule({
  declarations: [
    MainComponent,
    HeaderAuxComponent,
    FooterComponent,
    LogoSliderComponent,
    CartComponent,
    SearcherComponent,
    HeaderComponent,
    MobileNavComponent,
    MainCarouselComponent,
    BaseComponent,
    BaseAuxComponent,
    CartMenuComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    SharedModule,
    OverlayModule,
    A11yModule,
    RouterModule
  ],
  exports:[
    BaseComponent,
    BaseAuxComponent
  ]
})
export class LayoutModule { }
