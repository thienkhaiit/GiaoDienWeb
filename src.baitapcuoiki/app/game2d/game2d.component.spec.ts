import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Game2dComponent } from './game2d.component';

describe('Game2dComponent', () => {
  let component: Game2dComponent;
  let fixture: ComponentFixture<Game2dComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Game2dComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Game2dComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
