import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FaConfig, FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { MainComponent } from './components/layout/main/main.component';
import { NavComponent } from './components/layout/nav/nav.component';
import { SearcherComponent } from './components/searcher/searcher.component';
import { CartComponent } from './components/cart/cart.component';
import { OpenCloseService } from './services/open-close/open-close.service';
import { OverlayModule} from '@angular/cdk/overlay';
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    SearcherComponent,
    MainComponent,
    FooterComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    OverlayModule
  ],
  providers: [OpenCloseService],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(library:FaIconLibrary, faConfig:FaConfig){
    library.addIconPacks(fas,far);
    faConfig.fixedWidth = true;
  }
  
}
