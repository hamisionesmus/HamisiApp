import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondservicesComponent } from './secondservices.component';

describe('SecondservicesComponent', () => {
  let component: SecondservicesComponent;
  let fixture: ComponentFixture<SecondservicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondservicesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecondservicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
