import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstservicesComponent } from './firstservices.component';

describe('FirstservicesComponent', () => {
  let component: FirstservicesComponent;
  let fixture: ComponentFixture<FirstservicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstservicesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FirstservicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
