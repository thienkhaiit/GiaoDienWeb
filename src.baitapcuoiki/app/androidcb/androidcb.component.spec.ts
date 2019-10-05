import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AndroidcbComponent } from './androidcb.component';

describe('AndroidcbComponent', () => {
  let component: AndroidcbComponent;
  let fixture: ComponentFixture<AndroidcbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AndroidcbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AndroidcbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
