import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileNavbarMiddleComponent } from './profile-navbar-middle.component';

describe('ProfileNavbarMiddleComponent', () => {
  let component: ProfileNavbarMiddleComponent;
  let fixture: ComponentFixture<ProfileNavbarMiddleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileNavbarMiddleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileNavbarMiddleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
