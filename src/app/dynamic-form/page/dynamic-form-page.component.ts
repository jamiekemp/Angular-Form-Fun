import { Component } from '@angular/core';

@Component({
  selector: 'app-dynamic-form-page',
  templateUrl: './dynamic-form-page.component.html'
})
export class DynamicFormPageComponent {

    config = [
        {
            type: 'input',
            label: 'Full name',
            name: 'name',
            placeholder: 'Enter your name',
        },
        {
            type: 'select',
            label: 'Favourite food',
            name: 'food',
            options: ['Pizza', 'Hot Dogs', 'Knakworstje', 'Coffee'],
            placeholder: 'Select an option',
        },
        {
            label: 'Submit',
            name: 'submit',
            type: 'button',
        },
    ];

    submit(value: {[name: string]: any}) {
        console.log(value);
    }
}
