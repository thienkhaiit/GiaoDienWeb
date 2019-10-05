import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DammayComponent } from './dammay.component';

describe('DammayComponent', () => {
  let component: DammayComponent;
  let fixture: ComponentFixture<DammayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DammayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DammayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
