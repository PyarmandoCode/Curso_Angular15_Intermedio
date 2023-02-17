import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDiscosComponent } from './add-discos.component';

describe('AddDiscosComponent', () => {
  let component: AddDiscosComponent;
  let fixture: ComponentFixture<AddDiscosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddDiscosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddDiscosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
