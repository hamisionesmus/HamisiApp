import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstcontactComponent } from './firstcontact.component';

describe('FirstcontactComponent', () => {
  let component: FirstcontactComponent;
  let fixture: ComponentFixture<FirstcontactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstcontactComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FirstcontactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
