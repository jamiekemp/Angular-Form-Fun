import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { FormGroupTodo } from './reactive-form.interface';

@Component({
    selector: 'app-reactive-form',
    templateUrl: './reactive-form.component.html',
    styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {

    todoForm: FormGroup;

    initItem: Function = () => {
        const item = () => {                                            // Init item
            return {
                name:   ['', Validators.required],
                desc:   ['', Validators.required],
                locked: [false, Validators.pattern('true')]
            };
        };

        const todoItem = () => {                                        // Return an fb group of item
            const controls = item();
            return this.fb.group(controls);
        };

        return {
            todoItem: todoItem                                          // Reveal todoItem
        };
    }

    constructor(private fb: FormBuilder) {
        this.createForm();
    }

    ngOnInit() {
        console.log('test');
    }

    createForm() {                                                      // Create Form
        this.todoForm = this.fb.group({
            todoList: this.fb.array([]),
        });

        this.addItem();                                                 // Some quick and dirty item adding
        this.addItem();
    }

    onSubmit() {
        if (this.todoForm.valid) {                                      // Just some quick consoles
            console.log('VALID: this.todoForm', this.todoForm);
        } else {
            console.log('INVALID: this.todoForm', this.todoForm);
        }
    }

    addItem() {
        const initItem = this.initItem();                               // Init Module
        const todoItem = <FormGroupTodo>initItem.todoItem();            // Init FormGroup
        const todoList = <FormArray>this.todoForm.controls.todoList;    // Reference todoForm todoList
        todoList.push(todoItem);                                        // Push FormGroup to todoList

        todoItem.toggleLock = () => {
            const lockValue = todoItem.controls.locked.value;           // Get todoForm todoList locked value
            todoItem.controls.locked.setValue(!lockValue);              // Set todoForm todoList locked !value
        };
    }


}
