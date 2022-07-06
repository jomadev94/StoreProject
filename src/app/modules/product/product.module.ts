import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductRoutingModule } from './product-routing.module';
import { ProductViewComponent } from './components/product-view/product-view.component';
import { SharedModule } from '@modules/shared/shared.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ProductCarouselComponent } from './components/product-view/product-carousel/product-carousel.component';
import { FullPreviewComponent } from './components/product-view/full-preview/full-preview.component';
import { ProductCreateComponent } from './components/product-create/product-create.component';
import { StepOneComponent } from './components/product-create/components/step-one/step-one.component';
import { StepTwoComponent } from './components/product-create/components/step-two/step-two.component';
import { StepThreeComponent } from './components/product-create/components/step-three/step-three.component';
import { ReactiveFormsModule } from '@angular/forms';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { DeleteTagComponent } from './components/product-create/components/step-three/delete-tag/delete-tag.component';
import { RouterModule } from '@angular/router';
import { AlertModule } from '@modules/alert/alert.module';
import { ProductEditComponent } from './components/product-edit/product-edit.component';
import { ProductEditInfoComponent } from './components/product-edit/product-edit-info/product-edit-info.component';
import { ProductEditBoxComponent } from './components/product-edit/product-edit-box/product-edit-box.component';
import { ProductEditFilesComponent } from './components/product-edit/product-edit-files/product-edit-files.component';
import { ProductEditTagComponent } from './components/product-edit/product-edit-tag/product-edit-tag.component';
import { ProductSearchComponent } from './components/product-search/product-search.component';
import { HomeModule } from '@modules/home/home.module';

@NgModule({
  declarations: [
    ProductViewComponent,
    ProductCarouselComponent,
    FullPreviewComponent,
    ProductCreateComponent,
    StepOneComponent,
    StepTwoComponent,
    StepThreeComponent,
    DeleteTagComponent,
    ProductEditComponent,
    ProductEditInfoComponent,
    ProductEditBoxComponent,
    ProductEditFilesComponent,
    ProductEditTagComponent,
    ProductSearchComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    SharedModule,
    ProductRoutingModule,
    InfiniteScrollModule,
    RouterModule,
    AlertModule,
    HomeModule
  ],
  exports:[
    ProductViewComponent
  ]
})
export class ProductModule { }
