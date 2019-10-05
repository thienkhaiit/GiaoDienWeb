import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TkgdandroidComponent } from './tkgdandroid.component';

describe('TkgdandroidComponent', () => {
  let component: TkgdandroidComponent;
  let fixture: ComponentFixture<TkgdandroidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TkgdandroidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TkgdandroidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
