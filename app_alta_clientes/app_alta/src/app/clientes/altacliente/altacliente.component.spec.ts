import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AltaclienteComponent } from './altacliente.component';

describe('AltaclienteComponent', () => {
  let component: AltaclienteComponent;
  let fixture: ComponentFixture<AltaclienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AltaclienteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AltaclienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
