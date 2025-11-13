import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarPalabra } from './agregar-palabra';

describe('AgregarPalabra', () => {
  let component: AgregarPalabra;
  let fixture: ComponentFixture<AgregarPalabra>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgregarPalabra]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarPalabra);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
