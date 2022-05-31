import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AddWalletComponent } from './components/add-wallet/add-wallet.component';
import { SharedModule } from '@modules/shared/shared.module';

@NgModule({
  declarations: [
    AddWalletComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule
  ],
  exports:[
    AddWalletComponent
  ]
})
export class AddWalletModule { }
