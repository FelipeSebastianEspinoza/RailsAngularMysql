import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TaskComponent } from './components/task/task.component';
import { PrivateTaskComponent } from './components/private-task/private-task.component';
import { SignupComponent } from './components/signup/signup.component';
import { SigninComponent } from './components/signin/signin.component';

import { ExtinguishersComponent } from './components/extinguishers/extinguishers.component';
import { ExtinguishersRegistrationComponent } from './components/extinguishers/extinguishers-registration/extinguishers-registration.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/task',
    pathMatch: 'full',
  },
  {
    path: 'task',
    component: TaskComponent,
  },
  {
    path: 'private',
    component: PrivateTaskComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'signup',
    component: SignupComponent,
  },
  {
    path: 'signin',
    component: SigninComponent,
  },
  {
    path: 'extinguishers',
    component: ExtinguishersComponent,
  },
  {
    path: 'extinguishers/registration/:name',
    component: ExtinguishersRegistrationComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'extinguishers/edit/:id',
    component: ExtinguishersRegistrationComponent,
    canActivate: [AuthGuard],
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
