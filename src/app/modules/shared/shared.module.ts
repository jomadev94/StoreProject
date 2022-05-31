import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { SectionTitleComponent } from './components/section-title/section-title.component';
import { InputComponent } from './components/forms/input/input.component';
import { ButtonSubmitComponent } from './components/forms/button-submit/button-submit.component';
import { FormNotificationComponent } from './components/forms/form-notification/form-notification.component';
import { ModalComponent } from './components/modals/modal/modal.component';
import { LinkWithModalComponent } from './components/modals/link-with-modal/link-with-modal.component';
import { RoleDirective } from './directives/role/role.directive';
import { DigitOnlyDirective } from './directives/digitOnly/digit-only.directive';
import { DiscountPercentPipe } from './pipes/discount-percent/discount-percent.pipe';

@NgModule({
  declarations: [
    SectionTitleComponent,
    InputComponent,
    ButtonSubmitComponent,
    FormNotificationComponent,
    ModalComponent,
    LinkWithModalComponent,
    RoleDirective,
    DigitOnlyDirective,
    DiscountPercentPipe
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports:[
    SectionTitleComponent,
    InputComponent,
    ButtonSubmitComponent,
    FormNotificationComponent,
    ModalComponent,
    LinkWithModalComponent,
    RoleDirective,
    DigitOnlyDirective,
    DiscountPercentPipe
  ]
})
export class SharedModule { }
