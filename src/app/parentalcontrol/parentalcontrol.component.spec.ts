import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentalcontrolComponent } from './parentalcontrol.component';

describe('ParentalcontrolComponent', () => {
  let component: ParentalcontrolComponent;
  let fixture: ComponentFixture<ParentalcontrolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentalcontrolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentalcontrolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
