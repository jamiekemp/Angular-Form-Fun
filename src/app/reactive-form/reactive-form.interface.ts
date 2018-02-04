import { FormGroup } from '@angular/forms';

export interface FormGroupTodo extends FormGroup {
    locked:     boolean;
    toggleLock: Function;
}


