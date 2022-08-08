import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlertRoutingModule } from './alert-routing.module';
import { AlertComponent } from './components/alert/alert.component';
import { SharedModule } from '@modules/shared/shared.module';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ForbiddenComponent } from './components/forbidden/forbidden.component';
import { SoonComponent } from './components/soon/soon.component';
import { InactivityComponent } from './components/inactivity/inactivity.component';
import { InactivityModalComponent } from './components/inactivity/inactivity-modal/inactivity-modal.component';
import { CreatedComponent } from './components/created/created.component';
import { EmptyComponent } from './components/empty/empty.component';
import { ValidateComponent } from './components/validate/validate.component';
import { LoaderModule } from '@modules/loader/loader.module';


@NgModule({
  declarations: [
    AlertComponent,
    NotFoundComponent,
    ForbiddenComponent,
    SoonComponent,
    InactivityComponent,
    InactivityModalComponent,
    CreatedComponent,
    EmptyComponent,
    ValidateComponent,
  ],
  imports: [
    CommonModule,
    AlertRoutingModule,
    SharedModule,
    LoaderModule
  ],
  exports:[
    NotFoundComponent,
    ForbiddenComponent,
    SoonComponent,
    InactivityComponent,
    CreatedComponent,
    EmptyComponent,
  ]
})
export class AlertModule { }
