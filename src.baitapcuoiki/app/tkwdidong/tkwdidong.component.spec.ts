import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TkwdidongComponent } from './tkwdidong.component';

describe('TkwdidongComponent', () => {
  let component: TkwdidongComponent;
  let fixture: ComponentFixture<TkwdidongComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TkwdidongComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TkwdidongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
