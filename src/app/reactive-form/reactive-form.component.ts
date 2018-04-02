import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { FormGroupTodo, TodoItem } from './reactive-form.interface';
import { StorageService } from '../services/storage.service';
import { get } from 'lodash';

@Component({
    selector: 'app-reactive-form',
    templateUrl: './reactive-form.component.html',
    styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {

    todoForm: FormGroup;
    todoListSessionValues: any;
    todoSessionKey = 'jim-todo';

    constructor(private fb: FormBuilder,
                private storageService: StorageService) {
        this.todoListSessionValues = this.storageService.getItem(this.todoSessionKey);
        this.createForm();
    }

    ngOnInit() {
        console.log(`Jimbo's Todo List!`);
    }

    initTodoItem(values) {
        const controls = {                                                  // Init item
                name:       [values.name, Validators.required],
                desc:       [values.desc, Validators.required],
                confirmed:  [values.confirmed, Validators.pattern('true')]
        };

        return this.fb.group(controls);                                     // Return a FormBuilder group of item
    }

    createForm() {                                                          // Create Form
        this.todoForm = this.fb.group({
            todoList: this.fb.array([]),
        });
                                                                            // LoDash get on todoListSessionValues length
        if (get(this.todoListSessionValues, 'todoList.length')) {
            this.todoListSessionValues.todoList.forEach((item) => {
                this.addItem(item);                                         // If we have length, lets initialise each item
            });
        }
    }

    onSubmit() {
        if (this.todoForm.valid) {
            console.log('VALID: this.todoForm', this.todoForm);
            console.log('this.todoForm.value', this.todoForm.value);
            this.storageService.setItem(this.todoSessionKey, this.todoForm.value);       // Lets set this data to sessionStorage using our storageService
        } else {
            console.log('INVALID: this.todoForm', this.todoForm);
        }
    }

    addItem(values: TodoItem = {name: '', desc: '', confirmed: false}) {
        const todoItem = <FormGroupTodo>this.initTodoItem(values);              // Create FormGroup todoItem via initItem
        // const todoItem = <FormGroupTodo>this.initTodoItem(values);           // Create FormGroup todoItem via initItem ALTERNATIVE
        const todoList = <FormArray>this.todoForm.controls.todoList;            // Reference todoForm todoList
        todoList.push(todoItem);                                                // Push FormGroup to todoList

        todoItem.index = () => {
            return todoList.controls.indexOf(todoItem);                         // Get the index of this item
        };

        // Object.defineProperty(todoItem, 'index', {
        //     get: function() { return todoList.controls.indexOf(todoItem); }
        // });

        todoItem.toggleEdit = () => {
            todoItem.value.confirmed ? todoItem.cachedValue = todoItem.value : delete todoItem.cachedValue;         // Create cached value or delete it
            const confirmedValue = todoItem.value.confirmed;                                                        // Get todoForm todoList locked value
            todoItem.controls.confirmed.setValue(!confirmedValue);                                                  // Set inverted todoForm todoList value
        };

        todoItem.cancelEdit = () => {
            todoItem.setValue(todoItem.cachedValue);                    // Restore cachedValue
            delete todoItem.cachedValue;                                // And then delete it
        };

        todoItem.remove = () => {
            todoList.removeAt(todoItem.index());                        // Remove item from todoList based on it's index in todoList
        };
    }
}
