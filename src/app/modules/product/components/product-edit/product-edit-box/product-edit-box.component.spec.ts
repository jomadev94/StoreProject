import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductEditBoxComponent } from './product-edit-box.component';

describe('ProductEditBoxComponent', () => {
  let component: ProductEditBoxComponent;
  let fixture: ComponentFixture<ProductEditBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductEditBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductEditBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
