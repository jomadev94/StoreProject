import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageLoaderComponent } from './components/page-loader/page-loader.component';
import { SectionLoaderComponent } from './components/section-loader/section-loader.component';

@NgModule({
  declarations: [
    PageLoaderComponent,
    SectionLoaderComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[PageLoaderComponent, SectionLoaderComponent]
})
export class LoaderModule { }
