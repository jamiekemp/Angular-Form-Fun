import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicFormgroupComponent } from './dynamic-formgroup.component';

describe('DynamicFormgroupComponent', () => {
  let component: DynamicFormgroupComponent;
  let fixture: ComponentFixture<DynamicFormgroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicFormgroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicFormgroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
