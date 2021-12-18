import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarMiddleComponent } from './navbar-middle.component';

describe('NavbarMiddleComponent', () => {
  let component: NavbarMiddleComponent;
  let fixture: ComponentFixture<NavbarMiddleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarMiddleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarMiddleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
