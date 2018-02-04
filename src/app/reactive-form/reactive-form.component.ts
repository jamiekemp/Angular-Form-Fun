import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { InitItem } from './reactive-form.interface';

@Component({
    selector: 'app-reactive-form',
    templateUrl: './reactive-form.component.html',
    styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {

    todoForm: FormGroup;

    initItem: Function = () => {
        const item = () => {
            return {
                name: ['', Validators.required],
                desc: ['', Validators.required]
            };
        };

        const todoItem = () => {
            const controls = item();
            return this.fb.group(controls);
        };

        return {
            todoItem: todoItem
        };
    };

    constructor(private fb: FormBuilder) {
        this.createForm();
    }

    ngOnInit() {
        console.log('test');
    }

    createForm() {
        this.todoForm = this.fb.group({
            firstName: ['', [Validators.required]],
            lastName:  ['', [Validators.required]],
            todoList:  this.fb.array([]),
        });

        this.addItem();
        this.addItem();
    }

    onSubmit() {
        if (this.todoForm.valid) {
            console.log('VALID: this.todoForm', this.todoForm);
        } else {
            console.log('INVALID: this.todoForm', this.todoForm);
        }
    }

    addItem() {
        const control = <FormArray>this.todoForm.controls.todoList;
        const initItem = this.initItem();
        const listCtrl = initItem.todoItem();
        control.push(listCtrl);
    }


}
