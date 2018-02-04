import { Injectable } from '@angular/core';
import { get, set , unset} from 'lodash';

@Injectable()
export class StorageService {

    getItem(key: string, path?: string): any {
        if (path) {
            return get(this.getItem(key), path);                        // Return a specific sessionStorage item object path value using LoDash get
        } else {
            return JSON.parse(sessionStorage.getItem(key));             // Return the sessionStorage item object
        }
    }

    setItem(key: string, value: any, path?: string): void {
        if (path) {
            const sessionStorageItem = this.getItem(key);               // Get sessionStorage item object
            set(sessionStorageItem, path, value);                       // Using LoDash to set value at given path on the sessionStorage item object
            this.setItem(key, sessionStorageItem);                      // Recursive call to setItem with this updated sessionStorage item object
        } else {
            sessionStorage.setItem(key, JSON.stringify(value));         // Set sessionStorage item with value
        }
    }

    removeItem(key: string, path?: string): void {
        if (path) {
            const sessionStorageItem = this.getItem(key);               // Get sessionStorage item object
            unset(sessionStorageItem, path);                            // Using LoDash to remove the property at the given path on the sessionStorage item object
            this.setItem(key, sessionStorageItem);                      // setItem with this updated sessionStorage item object
        } else {
            sessionStorage.removeItem(key);                             // Remove the sessionStorage item
        }
    }

}
