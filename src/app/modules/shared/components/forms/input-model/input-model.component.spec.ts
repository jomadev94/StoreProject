import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputModelComponent } from './input-model.component';

describe('InputModelComponent', () => {
  let component: InputModelComponent;
  let fixture: ComponentFixture<InputModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputModelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
