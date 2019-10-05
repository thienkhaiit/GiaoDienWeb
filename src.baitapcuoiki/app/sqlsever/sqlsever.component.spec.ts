import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SqlseverComponent } from './sqlsever.component';

describe('SqlseverComponent', () => {
  let component: SqlseverComponent;
  let fixture: ComponentFixture<SqlseverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SqlseverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SqlseverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
