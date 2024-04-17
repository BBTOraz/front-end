import { SignupComponent } from './basic/component/signup/signup.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupClientComponent } from './basic/component/signup-client/signup-client.component';
import { LoginComponent } from './basic/component/login/login.component';

const routes: Routes = [
  { path: 'register-client', component: SignupClientComponent},
  { path: "login", component: LoginComponent},
  { path: "register", component: SignupComponent},
  { path: 'lawyer', loadChildren: () => import('./lawyer/lawyer.module').then(m => m.LawyerModule) }, 
  { path: 'client', loadChildren: () => import('./client/client.module').then(m => m.ClientModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
