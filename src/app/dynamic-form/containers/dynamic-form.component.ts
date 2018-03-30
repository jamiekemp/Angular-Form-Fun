import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

import { FieldConfig } from '../models/field-config.interface';

@Component({
    exportAs: 'appDynamicForm',
    selector: 'app-dynamic-form',
    templateUrl: './dynamic-form.component.html'
})
export class DynamicFormComponent implements OnChanges, OnInit {
    @Input()
    config: FieldConfig[] = [];

    @Output()
    submit: EventEmitter<any> = new EventEmitter<any>();

    form: FormGroup;

    filterGroups   = (items) => items.filter(({type}) => type === 'group');
    filterControls = (items) => items.filter(({type}) => type !== 'group' && type !== 'button');

    get groups()   { return this.filterGroups(this.config); }
    get controls() { return this.filterControls(this.config); }
    get changes()  { return this.form.valueChanges; }
    get valid()    { return this.form.valid; }
    get value()    { return this.form.value; }

    constructor(private fb: FormBuilder) {}

    ngOnInit() {
        this.form = this.createForm();
        console.log('form', this.form);
    }

    // TODO: Need to dig into this, so far seemed unnecessary
    ngOnChanges() {
        if (this.form) {
            const controls = Object.keys(this.form.controls);
            const configControls = this.controls.map((item) => item.name);

            controls
                .filter((control) => !configControls.includes(control))
                .forEach((control) => this.form.removeControl(control));

            configControls
                .filter((control) => !controls.includes(control))
                .forEach((name) => {
                    const config = this.config.find((control) => control.name === name);
                    this.form.addControl(name, this.createControl(config));
                });

        }
    }

    createForm() {
        const thisForm = this.createFormGroup(this.groups);
        this.controls.forEach(control => thisForm[control.name] = ['']);
        return this.fb.group(thisForm);
    }

    createFormGroup(groups) {
        let controlsConfig = {};
        const formGroup = {};
        groups.forEach(item => {
            const innerGroups = this.filterGroups(item.controls);
            if (innerGroups.length) {
                controlsConfig = this.createFormGroup(innerGroups);
            }
            const controls = this.filterControls(item.controls);
            controls.forEach(control => controlsConfig[control.name] = ['']);
            formGroup[item.name] = this.fb.group(controlsConfig);
        });
        return formGroup;
    }

    createControl(config: FieldConfig) {
        const { disabled, validation, value } = config;
        return this.fb.control({ disabled, value }, validation);
    }

    handleSubmit(event: Event) {
        event.preventDefault();
        event.stopPropagation();
        this.submit.emit(this.value);
    }

    // TODO: Need to dig into this
    setDisabled(name: string, disable: boolean) {
        if (this.form.controls[name]) {
            const method = disable ? 'disable': 'enable';
            this.form.controls[name][method]();
            return;
        }

        this.config = this.config.map((item) => {
            if (item.name === name) {
                item.disabled = disable;
            }
            return item;
        });
    }

    // TODO: Need to dig into this
    setValue(name: string, value: any) {
        this.form.controls[name].setValue(value, {emitEvent: true});
    }
}
