import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KiemthuandroidComponent } from './kiemthuandroid.component';

describe('KiemthuandroidComponent', () => {
  let component: KiemthuandroidComponent;
  let fixture: ComponentFixture<KiemthuandroidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KiemthuandroidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KiemthuandroidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
