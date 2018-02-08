import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormComponent } from './reactive-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { StorageService } from '../services/storage.service';

describe('ReactiveFormComponent', () => {
    let component: ReactiveFormComponent;
    let fixture: ComponentFixture<ReactiveFormComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [ReactiveFormsModule],
            providers: [ StorageService ],
            declarations: [ReactiveFormComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ReactiveFormComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

        expect(component).toBeTruthy();
    });
});
