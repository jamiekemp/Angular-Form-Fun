import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { DynamicFormPageComponent } from './dynamic-form/page/dynamic-form-page.component';
import { DynamicFormToddPageComponent } from './dynamic-form-todd/page/dynamic-form-page.component';
import { SessionTimerComponent } from './session-timer/session-timer.component';

const routes: Routes = [
  { path: '', pathMatch: 'full',
    redirectTo: '/reactiveform'
  },
  { path: 'reactiveform',
    component: ReactiveFormComponent
  },
  { path: 'dynamicform',
    component: DynamicFormPageComponent
  },
  { path: 'dynamicformtodd',
    component: DynamicFormToddPageComponent
  },
  { path: 'sessionTimer',
      component: SessionTimerComponent
  }
];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
