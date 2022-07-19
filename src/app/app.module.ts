import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {
  FaConfig,
  FaIconLibrary,
} from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor } from '@interceptors/jwt/jwt.interceptor';
import { ProductModule } from './modules/product/product.module';
import { LayoutModule } from './modules/layout/layout.module';
import { CookieModalModule } from './modules/cookie-modal/cookie-modal.module';
import { HomeModule } from './modules/home/home.module';
import { AddWalletModule } from './modules/add-wallet/add-wallet.module';
import { RegisterModule } from './modules/register/register.module';
import { LoginModule } from './modules/login/login.module';
import { LoaderInterceptor } from '@interceptors/loader/loader.interceptor';
import { LoaderModule } from '@modules/loader/loader.module';
import { AlertModule } from './modules/alert/alert.module';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideStorage,getStorage } from '@angular/fire/storage';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    HttpClientModule,
    ProductModule,
    LayoutModule,
    CookieModalModule,
    HomeModule,
    AddWalletModule,
    RegisterModule,
    LoginModule,
    LoaderModule,
    AlertModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideStorage(() => getStorage()),
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(library: FaIconLibrary, faConfig: FaConfig) {
    library.addIconPacks(fas, far);
    faConfig.fixedWidth = true;
  }
}