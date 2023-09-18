import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MediacomponentComponent } from './mediacomponent.component';

describe('MediacomponentComponent', () => {
  let component: MediacomponentComponent;
  let fixture: ComponentFixture<MediacomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MediacomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MediacomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
