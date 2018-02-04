import { FormGroup } from '@angular/forms';

export interface FormGroupTodo extends FormGroup {
    locked:         boolean;
    cachedValue:    object;
    index:          Function;
    toggleEdit:     Function;
    cancelEdit:     Function;
    canCancel:      Function;
    remove:         Function;
}

export interface TodoItem {
    name:       string;
    desc:       string;
    confirmed:  boolean;
}


