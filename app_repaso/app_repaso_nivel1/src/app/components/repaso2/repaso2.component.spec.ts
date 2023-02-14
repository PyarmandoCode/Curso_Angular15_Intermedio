import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Repaso2Component } from './repaso2.component';

describe('Repaso2Component', () => {
  let component: Repaso2Component;
  let fixture: ComponentFixture<Repaso2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Repaso2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Repaso2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
