import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynFormContComponent } from './dynamic-form-cont.component';

describe('DynFormContComponent', () => {
  let component: DynFormContComponent;
  let fixture: ComponentFixture<DynFormContComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynFormContComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynFormContComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
