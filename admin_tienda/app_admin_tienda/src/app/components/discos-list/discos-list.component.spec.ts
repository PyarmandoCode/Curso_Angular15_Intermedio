import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscosListComponent } from './discos-list.component';

describe('DiscosListComponent', () => {
  let component: DiscosListComponent;
  let fixture: ComponentFixture<DiscosListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiscosListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiscosListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
