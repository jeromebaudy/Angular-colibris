import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionSeriesComponent } from './gestion-series.component';

describe('GestionSeriesComponent', () => {
  let component: GestionSeriesComponent;
  let fixture: ComponentFixture<GestionSeriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionSeriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionSeriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
