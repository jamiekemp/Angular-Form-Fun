import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule, FormBuilder } from '@angular/forms';

import { FormButtonComponent } from './form-button.component';

describe('FormButtonComponent', () => {
  let component: FormButtonComponent;
  let fixture: ComponentFixture<FormButtonComponent>;
  const formBuilder: FormBuilder = new FormBuilder();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
          FormButtonComponent
        ],
        imports: [ReactiveFormsModule],
        providers: [
            { provide: FormBuilder, useValue: formBuilder }
        ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormButtonComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
      component.config = {
          type: 'input',
          label: 'Reference',
          name: 'reference',
          placeholder: 'Enter your reference',
      };
      component.group = formBuilder.group({});
      fixture.detectChanges();
      expect(component).toBeTruthy();
  });
});

// beforeEach(() => {
//     TestBed.configureTestingModule({
//         declarations: [ VoterComponent ]
//     })
//     fixture = TestBed.createComponent(VoterComponent);
//     component = fixture.componentInstance;
// });
//
// it('should render total votes counter', () => {
//     component.othersVote = 20;
//     component.myVote = 1;
//
//     fixture.detectChanges();
//
//     let de = fixture.debugElement.query(By.css('.vote-count'));
//     let el: HTMLElement = de.nativeElement;
//     expect(el.innerText).toContain(21);
// });
//
