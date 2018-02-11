import { FormGroup } from '@angular/forms';

export interface FormGroupTodo extends FormGroup {
    toggleEdit:     Function;
    cancelEdit:     Function;
    canCancel:      Function;
    remove:         Function;
    index:          Function;
    locked:         boolean;
    cachedValue:    object;
}

export interface TodoItem {
    name:       string;
    desc:       string;
    confirmed:  boolean;
}



