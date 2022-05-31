import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {
  FaConfig,
  FaIconLibrary,
  FontAwesomeModule,
} from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OverlayModule } from '@angular/cdk/overlay';
import { A11yModule } from '@angular/cdk/a11y';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor } from '@interceptors/jwt/jwt.interceptor';
import { ProductViewModule } from './modules/product-view/product-view.module';
import { SharedModule } from './modules/shared/shared.module';
import { LayoutModule } from './modules/layout/layout.module';
import { CookieModalModule } from './modules/cookie-modal/cookie-modal.module';
import { HomeModule } from './modules/home/home.module';
import { AddWalletModule } from './modules/add-wallet/add-wallet.module';
import { RegisterModule } from './modules/register/register.module';
import { LoginModule } from './modules/login/login.module';
import { LoaderInterceptor } from '@interceptors/loader/loader.interceptor';
import { LoaderModule } from '@modules/loader/loader.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ProductViewModule,
    LayoutModule,
    CookieModalModule,
    HomeModule,
    AddWalletModule,
    RegisterModule,
    LoginModule,
    LoaderModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(library: FaIconLibrary, faConfig: FaConfig) {
    library.addIconPacks(fas, far);
    faConfig.fixedWidth = true;
  }
}

// FontAwesomeModule,
// OverlayModule,
// A11yModule,
// ReactiveFormsModule,
// SharedModule,