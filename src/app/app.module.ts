import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { StorageService } from './services/storage.service';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { DynFormContComponent } from './dynamic-form/components/dyn-form-cont/dynamic-form-cont.component';
import { FormInputComponent } from './dynamic-form/components/form-input/form-input.component';
import { FormSelectComponent } from './dynamic-form/components/form-select/form-select.component';
import { FormButtonComponent } from './dynamic-form/components/form-button/form-button.component';
import { DynamicFieldDirective } from './dynamic-form/components/dynamic-field/dynamic-field.directive';


@NgModule({
    declarations: [
        AppComponent,
        ReactiveFormComponent,
        DynamicFormComponent,
        DynFormContComponent,
        FormInputComponent,
        FormSelectComponent,
        FormButtonComponent,
        DynamicFieldDirective,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule
    ],
    exports: [
        DynamicFormComponent
    ],
    entryComponents: [
        FormButtonComponent,
        FormInputComponent,
        FormSelectComponent,
    ],
    providers: [
        StorageService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
