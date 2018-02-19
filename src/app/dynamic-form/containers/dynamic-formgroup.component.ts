import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

import { FieldConfig } from '../models/field-config.interface';

@Component({
    exportAs: 'appDynamicFormgroup',
    selector: 'app-dynamic-formgroup',
    templateUrl: './dynamic-formgroup.component.html'
})
export class DynamicFormgroupComponent implements OnChanges, OnInit {
    @Input()
    config: FieldConfig;

    @Output()
    submit: EventEmitter<any> = new EventEmitter<any>();

    form: FormGroup;

    // get controls() { return this.config.filter(({type}) => type !== 'button'); }
    get groups() { return this.config.groups; }
    get changes() { return this.form.valueChanges; }
    get valid() { return this.form.valid; }
    get value() { return this.form.value; }

    constructor(private fb: FormBuilder) {}

    ngOnInit() {
        this.form = this.createForm();
        console.log(this.form);
    }

    ngOnChanges() {
        // if (this.form) {
        //     const controls = Object.keys(this.form.controls);
        //     const configControls = this.controls.map((item) => item.name);
        //
        //     controls
        //         .filter((control) => !configControls.includes(control))
        //         .forEach((control) => this.form.removeControl(control));
        //
        //     configControls
        //         .filter((control) => !controls.includes(control))
        //         .forEach((name) => {
        //             const config = this.config.find((control) => control.name === name);
        //             this.form.addControl(name, this.createControl(config));
        //         });
        //
        // }
    }

    // createForm() {
    //     this.yourDetailsForm = this.fb.group({ // <-- the parent FormGroup
    //         personal: this.fb.group({
    //             firstName: [''],
    //             lastName:  [''],
    //             email:     [''],
    //         }),
    //         address: this.fb.group({
    //             address1: [''],
    //             address2:  [''],
    //             city:     [''],
    //             postcode:     [''],
    //         }),
    //     });
    // }

    createForm() {
        const controlsConfig = {};
        this.groups.forEach(group => {
            const initGroup = this.fb.group({});
            group.controls.forEach(control => initGroup.addControl(control.name, this.createControl(control)));
            controlsConfig[group.name] = initGroup;
        });
        return this.fb.group(controlsConfig);
    }

    // createGroup() {
    //     const group = this.fb.group({});
    //     this.controls.forEach(control => group.addControl(control.name, this.createControl(control)));
    //     return group;
    // }

    createControl(config: FieldConfig) {
        const { disabled, validation, value } = config;
        return this.fb.control({ disabled, value }, validation);
    }

    handleSubmit(event: Event) {
        event.preventDefault();
        event.stopPropagation();
        this.submit.emit(this.value);
    }

    // setDisabled(name: string, disable: boolean) {
    //     if (this.form.controls[name]) {
    //         const method = disable ? 'disable': 'enable';
    //         this.form.controls[name][method]();
    //         return;
    //     }
    //
    //     this.config = this.config.map((item) => {
    //         if (item.name === name) {
    //             item.disabled = disable;
    //         }
    //         return item;
    //     });
    // }

    setValue(name: string, value: any) {
        this.form.controls[name].setValue(value, {emitEvent: true});
    }
}
