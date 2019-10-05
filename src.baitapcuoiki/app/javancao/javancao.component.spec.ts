import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JavancaoComponent } from './javancao.component';

describe('JavancaoComponent', () => {
  let component: JavancaoComponent;
  let fixture: ComponentFixture<JavancaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JavancaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JavancaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
