import { ServerModule } from '@angular/platform-server';
import { Component } from '@angular/core';
import { LawyerService } from '../../services/lawyer.service';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { error } from 'console';

@Component({
  selector: 'app-lawyer-dashboard',
  templateUrl: './lawyer-dashboard.component.html',
  styleUrl: './lawyer-dashboard.component.scss'
})
export class LawyerDashboardComponent {
  reservations: any

  constructor(private lawyerService: LawyerService,
    private notification: NzNotificationService
  ){}

  ngOnInit(){
    this.getAllReservations();
  }

  getAllReservations(){
    this.lawyerService.getAllReservation().subscribe(res=>{
      console.log(res);
      this.reservations = res;
    })
  }

  changeReservationStatus(reservationId: any, status: string){
    this.lawyerService.changeReservationStatus(reservationId, status).subscribe(res=>{
      this.notification
      .success(
        'SUCCESS',
        `Reservation status changed successfully`,
        { nzDuration: 5000}
      );
      this.getAllReservations();
    }, error=>{
      this.notification
      .error(
        'ERROR',
        `${error.message}`,
        {nzDuration: 5000}
      )
    })
  }
}
