import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarOverviewPageComponent } from './car-overview-page.component';

describe('OverviewPageComponent', () => {
  let component: CarOverviewPageComponent;
  let fixture: ComponentFixture<CarOverviewPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarOverviewPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarOverviewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
