import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseAuxComponent } from './base-aux.component';

describe('BaseAuxComponent', () => {
  let component: BaseAuxComponent;
  let fixture: ComponentFixture<BaseAuxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaseAuxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseAuxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
