import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewActionComponent } from './Pages/new-action/new-action.component';
import { Page404Component } from './Pages/page404/page404.component';
import { AboutComponent } from './Pages/about/about.component';
import { AllAccountDetailsComponent } from './Pages/all-account-details/all-account-details.component';
import { LoginComponent } from './Pages/login/login.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'newAction/:accountNumber/:operation',
    component: NewActionComponent,
  },
  { path: 'account/:accountNumber', component: AllAccountDetailsComponent },
  { path: 'about', component: AboutComponent },
  { path: '**', component: Page404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
