import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';

const routes: Routes = [
  { path: '', pathMatch: 'full',
    redirectTo: '/reactiveform'
  },
  { path: 'reactiveform',
    component: ReactiveFormComponent
  },
  { path: 'dynamicform',
    component: DynamicFormComponent
  }
];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
