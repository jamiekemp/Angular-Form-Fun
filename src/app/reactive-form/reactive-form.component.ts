import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { FormGroupTodo } from './reactive-form.interface';
import { StorageService } from '../services/storage.service';

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
                edit:   [false, Validators.pattern('true')]
            };
        };

        const todoItem = () => {                                        // Return a FormBuilder group of item
            const controls = item();
            return this.fb.group(controls);
        };

        return {
            todoItem: todoItem                                          // Reveal todoItem
        };
    }

    constructor(
        private fb: FormBuilder,
        private storageService: StorageService,
    ) {
        this.createForm();
    }

    ngOnInit() {
        console.log('test');
    }

    createForm() {                                                      // Create Form
        this.todoForm = this.fb.group({
            todoList: this.fb.array([]),
        });

        // this.addItem();                                              // Some quick and dirty item adding
    }

    onSubmit() {
        if (this.todoForm.valid) {
            console.log('VALID: this.todoForm', this.todoForm);
            console.log('this.todoForm.value', this.todoForm.value);
            this.storageService.setItem('jim-todo', this.todoForm.value);       // Lets set this data to sessionStorage using our storageService
        } else {
            console.log('INVALID: this.todoForm', this.todoForm);
        }
    }

    addItem() {
        const initItem = this.initItem();                               // Init Module for creating todoItem
        const todoItem = <FormGroupTodo>initItem.todoItem();            // Create FormGroup todoItem via initItem
        const todoList = <FormArray>this.todoForm.controls.todoList;    // Reference todoForm todoList
        todoList.push(todoItem);                                        // Push FormGroup to todoList

        todoItem.index = () => {
            return todoList.controls.indexOf(todoItem);                 // Get the index of this item
        };

        todoItem.toggleEdit = () => {
            todoItem.value.edit ? todoItem.cachedValue = todoItem.value : delete todoItem.cachedValue;    // Create cached value or delete it
            const editValue = todoItem.value.edit;                                                        // Get todoForm todoList locked value
            todoItem.controls.edit.setValue(!editValue);                                                  // Set inverted todoForm todoList value
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
