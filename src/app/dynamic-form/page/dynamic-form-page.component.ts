import { Component } from '@angular/core';

@Component({
  selector: 'app-dynamic-form-page',
  templateUrl: './dynamic-form-page.component.html'
})
export class DynamicFormPageComponent {

    groupConfig = [
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
        {
            type: 'group',
            name: 'personal',
            controls: [
                {
                    type: 'input',
                    label: 'First name',
                    name: 'firstname',
                    placeholder: 'Enter your first name',
                },
                {
                    type: 'input',
                    label: 'Last name',
                    name: 'lastname',
                    placeholder: 'Enter your first name',
                },
                {
                    type: 'input',
                    label: 'Email',
                    name: 'email',
                    placeholder: 'Enter your email',
                },
            ],
            groupConfig: [
                {
                    type: 'group',
                    name: 'Father',
                    controls: [
                        {
                            type: 'input',
                            label: 'First name',
                            name: 'firstname',
                            placeholder: 'Enter your first name',
                        },
                        {
                            type: 'input',
                            label: 'Last name',
                            name: 'lastname',
                            placeholder: 'Enter your first name',
                        },
                        {
                            type: 'input',
                            label: 'Email',
                            name: 'email',
                            placeholder: 'Enter your email',
                        },
                    ]
                },
                {
                    type: 'group',
                    name: 'Mother',
                    controls: [
                        {
                            type: 'input',
                            label: 'First name',
                            name: 'firstname',
                            placeholder: 'Enter your first name',
                        },
                        {
                            type: 'input',
                            label: 'Last name',
                            name: 'lastname',
                            placeholder: 'Enter your first name',
                        },
                        {
                            type: 'input',
                            label: 'Email',
                            name: 'email',
                            placeholder: 'Enter your email',
                        },
                    ]
                }
            ]
        },
        {
            type: 'group',
            name: 'address',
            controls: [
                {
                    type: 'input',
                    label: 'Address 1',
                    name: 'address1',
                    placeholder: 'Enter your address line 1',
                },
                {
                    type: 'input',
                    label: 'Address 2',
                    name: 'address2',
                    placeholder: 'Enter your address line 2',
                },
                {
                    type: 'input',
                    label: 'City',
                    name: 'city',
                    placeholder: 'Enter your city',
                },
                {
                    type: 'input',
                    label: 'Postcode',
                    name: 'postcode',
                    placeholder: 'Enter your postcode',
                },
            ]
        }
    ];

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
        }
    ];

    submit(value: {[name: string]: any}) {
        console.log(value);
    }
}
