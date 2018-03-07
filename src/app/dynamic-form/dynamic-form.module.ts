import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { DynamicFieldDirective } from './components/dynamic-field/dynamic-field.directive';
import { DynamicFormComponent } from './containers/dynamic-form.component';
import { DynamicFormgroupComponent } from './containers/dynamic-formgroup.component';
import { FormInputComponent } from './components/form-input/form-input.component';
import { FormSelectComponent } from './components/form-select/form-select.component';
import { FormButtonComponent } from './components/form-button/form-button.component';
import { FormGroupComponent } from './components/form-group/form-group.component';


@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
    ],
    declarations: [
        DynamicFieldDirective,
        DynamicFormComponent,
        DynamicFormgroupComponent,
        FormInputComponent,
        FormSelectComponent,
        FormButtonComponent,
        FormGroupComponent,
    ],
    exports: [
        DynamicFormComponent,
        DynamicFormgroupComponent
    ],
    entryComponents: [
        FormButtonComponent,
        FormInputComponent,
        FormSelectComponent,
        FormGroupComponent,
    ]
})
export class DynamicFormModule {
}
