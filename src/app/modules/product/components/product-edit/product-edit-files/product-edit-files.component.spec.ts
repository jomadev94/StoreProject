import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductEditFilesComponent } from './product-edit-files.component';

describe('ProductEditFilesComponent', () => {
  let component: ProductEditFilesComponent;
  let fixture: ComponentFixture<ProductEditFilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductEditFilesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductEditFilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
