import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FastandupComponent } from './fastandup.component';

describe('FastandupComponent', () => {
  let component: FastandupComponent;
  let fixture: ComponentFixture<FastandupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FastandupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FastandupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
