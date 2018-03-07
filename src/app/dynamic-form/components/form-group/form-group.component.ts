import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { FieldConfig } from '../../models/field-config.interface';

@Component({
  selector: 'app-form-group',
  templateUrl: './form-group.component.html'
})

export class FormGroupComponent {
    config: FieldConfig;
    group: FormGroup;
}
