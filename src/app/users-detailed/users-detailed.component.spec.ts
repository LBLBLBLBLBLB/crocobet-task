import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersDetailedComponent } from './users-detailed.component';

describe('UsersDetailedComponent', () => {
  let component: UsersDetailedComponent;
  let fixture: ComponentFixture<UsersDetailedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UsersDetailedComponent]
    });
    fixture = TestBed.createComponent(UsersDetailedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
