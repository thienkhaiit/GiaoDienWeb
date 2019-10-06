import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductdetaillComponent } from './productdetaill.component';

describe('ProductdetaillComponent', () => {
  let component: ProductdetaillComponent;
  let fixture: ComponentFixture<ProductdetaillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductdetaillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductdetaillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
