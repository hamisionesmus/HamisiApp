import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondcontactComponent } from './secondcontact.component';

describe('SecondcontactComponent', () => {
  let component: SecondcontactComponent;
  let fixture: ComponentFixture<SecondcontactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondcontactComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecondcontactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
