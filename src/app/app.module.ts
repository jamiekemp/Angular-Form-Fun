import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { StorageService } from './services/storage.service';
import { DynamicFormPageComponent } from './dynamic-form/page/dynamic-form-page.component';
import { DynamicFormModule } from './dynamic-form/dynamic-form.module';


@NgModule({
    declarations: [
        AppComponent,
        ReactiveFormComponent,
        DynamicFormPageComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        DynamicFormModule
    ],
    providers: [
        StorageService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
