import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VbnetComponent } from './vbnet.component';

describe('VbnetComponent', () => {
  let component: VbnetComponent;
  let fixture: ComponentFixture<VbnetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VbnetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VbnetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
