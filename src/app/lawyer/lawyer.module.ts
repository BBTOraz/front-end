import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LawyerRoutingModule } from './lawyer-routing.module';
import { LawyerComponent } from './lawyer.component';
import { LawyerDashboardComponent } from './pages/lawyer-dashboard/lawyer-dashboard.component';
import { CreateProfileComponent } from './pages/create-profile/create-profile.component';
import { DemoNgZorroAntdModule } from '../DemoNgZorroAntModuls';
import { ProfileComponent } from './pages/profile/profile.component';
import { UpdateLawyerComponent } from './pages/update-lawyer/update-lawyer.component';


@NgModule({
  declarations: [
    LawyerComponent,
    LawyerDashboardComponent,
    CreateProfileComponent,
    ProfileComponent,
    UpdateLawyerComponent
  ],
  imports: [
    CommonModule,
    LawyerRoutingModule, 
    FormsModule,
    ReactiveFormsModule,
    DemoNgZorroAntdModule
  ],
  schemas: [
    NO_ERRORS_SCHEMA
  ]
})
export class LawyerModule { }
