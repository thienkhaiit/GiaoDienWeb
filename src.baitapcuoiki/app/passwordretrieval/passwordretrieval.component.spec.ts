import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordretrievalComponent } from './passwordretrieval.component';

describe('PasswordretrievalComponent', () => {
  let component: PasswordretrievalComponent;
  let fixture: ComponentFixture<PasswordretrievalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PasswordretrievalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PasswordretrievalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
