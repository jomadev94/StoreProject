import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonWithModalMenuComponent } from './button-with-modal-menu.component';

describe('ButtonWithModalMenuComponent', () => {
  let component: ButtonWithModalMenuComponent;
  let fixture: ComponentFixture<ButtonWithModalMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonWithModalMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonWithModalMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
