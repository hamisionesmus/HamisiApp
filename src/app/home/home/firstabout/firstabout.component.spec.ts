import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstaboutComponent } from './firstabout.component';

describe('FirstaboutComponent', () => {
  let component: FirstaboutComponent;
  let fixture: ComponentFixture<FirstaboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstaboutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FirstaboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
