import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Htnl5css3Component } from './htnl5css3.component';

describe('Htnl5css3Component', () => {
  let component: Htnl5css3Component;
  let fixture: ComponentFixture<Htnl5css3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Htnl5css3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Htnl5css3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
