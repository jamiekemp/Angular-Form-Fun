import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { StorageService } from './services/storage.service';
import { DynamicFormModule } from './dynamic-form/dynamic-form.module';
import { DynamicFormPageComponent } from './dynamic-form/page/dynamic-form-page.component';
import { DynamicFormToddModule } from './dynamic-form-todd/dynamic-form-todd.module';
import { DynamicFormToddPageComponent } from './dynamic-form-todd/page/dynamic-form-page.component';


@NgModule({
    declarations: [
        AppComponent,
        ReactiveFormComponent,
        DynamicFormPageComponent,
        DynamicFormToddPageComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        DynamicFormModule,
        DynamicFormToddModule,
    ],
    providers: [
        StorageService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
