import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionRequestComponent } from './gestion-request.component';

describe('GestionRequestComponent', () => {
  let component: GestionRequestComponent;
  let fixture: ComponentFixture<GestionRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
