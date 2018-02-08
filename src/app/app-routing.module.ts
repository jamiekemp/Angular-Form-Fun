import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { DynamicFormPageComponent } from './dynamic-form/page/dynamic-form-page.component';

const routes: Routes = [
  { path: '', pathMatch: 'full',
    redirectTo: '/reactiveform'
  },
  { path: 'reactiveform',
    component: ReactiveFormComponent
  },
  { path: 'dynamicform',
    component: DynamicFormPageComponent
  }
];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
