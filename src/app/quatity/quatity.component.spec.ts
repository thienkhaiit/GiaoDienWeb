import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuatityComponent } from './quatity.component';

describe('QuatityComponent', () => {
  let component: QuatityComponent;
  let fixture: ComponentFixture<QuatityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuatityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuatityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
