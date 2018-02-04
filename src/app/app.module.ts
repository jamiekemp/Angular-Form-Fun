import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { StorageService } from './services/storage.service';


@NgModule({
    declarations: [
        AppComponent,
        ReactiveFormComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    providers: [
        StorageService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
