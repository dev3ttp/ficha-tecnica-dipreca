import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FuncionalidadDiprecaComponent } from './funcionalidad-dipreca.component';

describe('FuncionalidadDiprecaComponent', () => {
  let component: FuncionalidadDiprecaComponent;
  let fixture: ComponentFixture<FuncionalidadDiprecaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FuncionalidadDiprecaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FuncionalidadDiprecaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
