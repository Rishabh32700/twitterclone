import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageNavbarMiddleComponent } from './message-navbar-middle.component';

describe('MessageNavbarMiddleComponent', () => {
  let component: MessageNavbarMiddleComponent;
  let fixture: ComponentFixture<MessageNavbarMiddleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MessageNavbarMiddleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageNavbarMiddleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
