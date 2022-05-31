import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CookieModalComponent } from './components/cookie-modal/cookie-modal.component';

@NgModule({
  declarations: [
    CookieModalComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    CookieModalComponent
  ]
})
export class CookieModalModule { }
