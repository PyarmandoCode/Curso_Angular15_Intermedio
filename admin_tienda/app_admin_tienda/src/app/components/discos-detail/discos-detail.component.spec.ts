import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscosDetailComponent } from './discos-detail.component';

describe('DiscosDetailComponent', () => {
  let component: DiscosDetailComponent;
  let fixture: ComponentFixture<DiscosDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiscosDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiscosDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
