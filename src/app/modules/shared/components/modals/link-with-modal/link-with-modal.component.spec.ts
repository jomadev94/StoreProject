import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkWithModalComponent } from './link-with-modal.component';

describe('LinkWithModalComponent', () => {
  let component: LinkWithModalComponent;
  let fixture: ComponentFixture<LinkWithModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinkWithModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkWithModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
