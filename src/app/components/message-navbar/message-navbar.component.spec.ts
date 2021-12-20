import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageNavbarComponent } from './message-navbar.component';

describe('MessageNavbarComponent', () => {
  let component: MessageNavbarComponent;
  let fixture: ComponentFixture<MessageNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MessageNavbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
