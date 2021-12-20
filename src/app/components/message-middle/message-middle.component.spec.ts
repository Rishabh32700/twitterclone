import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageMiddleComponent } from './message-middle.component';

describe('MessageMiddleComponent', () => {
  let component: MessageMiddleComponent;
  let fixture: ComponentFixture<MessageMiddleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MessageMiddleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageMiddleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
