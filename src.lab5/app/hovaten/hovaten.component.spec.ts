import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HovatenComponent } from './hovaten.component';

describe('HovatenComponent', () => {
  let component: HovatenComponent;
  let fixture: ComponentFixture<HovatenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HovatenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HovatenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
