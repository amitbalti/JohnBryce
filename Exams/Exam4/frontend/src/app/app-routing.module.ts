import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './Layout/main/main.component';
import { NewActionComponent } from './Pages/new-action/new-action.component';
import { Page404Component } from './Pages/page404/page404.component';
import { AboutComponent } from './Pages/about/about.component';
import { AllAccountDetailsComponent } from './Pages/all-account-details/all-account-details.component';
import { LoginComponent } from './Pages/login/login.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'newAction', component: NewActionComponent },
  { path: 'allAccountDetails', component: AllAccountDetailsComponent },
  { path: 'about', component: AboutComponent },
  { path: 'account/:id', component: MainComponent },
  { path: '**', component: Page404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
