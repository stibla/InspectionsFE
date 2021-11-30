import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegexcalculationComponent } from './regexcalculation.component';

describe('RegexcalculationComponent', () => {
  let component: RegexcalculationComponent;
  let fixture: ComponentFixture<RegexcalculationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegexcalculationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegexcalculationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
