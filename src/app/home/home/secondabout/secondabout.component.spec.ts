import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondaboutComponent } from './secondabout.component';

describe('SecondaboutComponent', () => {
  let component: SecondaboutComponent;
  let fixture: ComponentFixture<SecondaboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondaboutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecondaboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
