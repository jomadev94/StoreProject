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
import { InfoTextComponent } from './components/info-text/info-text.component';
import { InputCheckboxComponent } from './components/forms/input-checkbox/input-checkbox.component';
import { InputNumberComponent } from './components/forms/input-number/input-number.component';
import { TextareaComponent } from './components/forms/textarea/textarea.component';
import { InputBaseComponent } from './components/forms/input-base/input-base.component';
import { InputFileComponent } from './components/forms/input-file/input-file.component';
import { InputButtonComponent } from './components/forms/input-button/input-button.component';
import { InputModelComponent } from './components/forms/input-model/input-model.component';
import { InputPasswordComponent } from './components/forms/input-password/input-password.component';
import { SelectComponent } from './components/forms/select/select.component';
import { ButtonComponent } from './components/button/button.component';
import { ImgPreviewComponent } from './components/img-preview/img-preview.component';
import { DeleteModalComponent } from './components/modals/delete-modal/delete-modal.component';
import { LoadingComponent } from './components/loading/loading.component';

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
    DiscountPercentPipe,
    InfoTextComponent,
    InputCheckboxComponent,
    InputNumberComponent,
    TextareaComponent,
    InputBaseComponent,
    InputFileComponent,
    InputButtonComponent,
    InputModelComponent,
    InputPasswordComponent,
    SelectComponent,
    ButtonComponent,
    ImgPreviewComponent,
    DeleteModalComponent,
    LoadingComponent
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
    DiscountPercentPipe,
    InfoTextComponent,
    InputNumberComponent,
    TextareaComponent,
    InputCheckboxComponent,
    InputFileComponent,
    InputButtonComponent,
    InputPasswordComponent,
    SelectComponent,
    ButtonComponent,
    ImgPreviewComponent,
    LoadingComponent
  ]
})
export class SharedModule { }
