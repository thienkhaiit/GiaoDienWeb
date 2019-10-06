import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { alexanderComponent } from './alexander.component';

describe('alexanderComponent', () => {
  let component: alexanderComponent;
  let fixture: ComponentFixture<alexanderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ alexanderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(alexanderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
