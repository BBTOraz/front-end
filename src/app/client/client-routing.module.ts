import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientComponent } from './client.component';
import { ClientDashboardComponent } from './pages/client-dashboard/client-dashboard.component';
import { LawyerDetailComponent } from './pages/lawyer-detail/lawyer-detail.component';
import { MyReservationsComponent } from './pages/my-reservations/my-reservations.component';
import { ReviewComponent } from './pages/review/review.component';

const routes: Routes = [
  { path: '', component: ClientComponent },
  { path: 'dashboard', component: ClientDashboardComponent }, 
  { path: 'my-reservations', component: MyReservationsComponent }, 
  { path: 'lawyer/:id', component: LawyerDetailComponent }, 
  { path: 'review/:id', component: ReviewComponent }, 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
