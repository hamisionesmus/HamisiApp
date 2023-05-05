import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirsthomeComponent } from './firsthome.component';

describe('FirsthomeComponent', () => {
  let component: FirsthomeComponent;
  let fixture: ComponentFixture<FirsthomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirsthomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FirsthomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
