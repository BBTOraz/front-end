import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { ClientComponent } from './client.component';
import { ClientDashboardComponent } from './pages/client-dashboard/client-dashboard.component';
import { DemoNgZorroAntdModule } from '../DemoNgZorroAntModuls';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { NgxSpinnerModule } from 'ngx-spinner';
import { LawyerDetailComponent } from './pages/lawyer-detail/lawyer-detail.component';
import { MyReservationsComponent } from './pages/my-reservations/my-reservations.component';
import { ReviewComponent } from './pages/review/review.component';
import { NzSliderModule } from 'ng-zorro-antd/slider';


@NgModule({
  declarations: [
    ClientComponent,
    ClientDashboardComponent,
    LawyerDetailComponent,
    MyReservationsComponent,
    ReviewComponent
  ],
  imports: [
    CommonModule,
    ClientRoutingModule, 
    DemoNgZorroAntdModule,
    FormsModule,
    ReactiveFormsModule,
    InfiniteScrollModule,
    NgxSpinnerModule,
    NzSliderModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class ClientModule { }
