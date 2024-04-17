import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LawyerComponent } from './lawyer.component';
import { LawyerDashboardComponent } from './pages/lawyer-dashboard/lawyer-dashboard.component';
import { CreateProfileComponent } from './pages/create-profile/create-profile.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { UpdateLawyerComponent } from './pages/update-lawyer/update-lawyer.component';

const routes: Routes = [
  { path: '', component: LawyerComponent },
  { path: 'dashboard', component: LawyerDashboardComponent },
  { path: 'profile', component: CreateProfileComponent},
  { path: 'show-profile', component: ProfileComponent},
  { path: 'update/:id', component: UpdateLawyerComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LawyerRoutingModule { }
