import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondhomeComponent } from './secondhome.component';

describe('SecondhomeComponent', () => {
  let component: SecondhomeComponent;
  let fixture: ComponentFixture<SecondhomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondhomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecondhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
