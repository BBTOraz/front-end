import { ClientService } from './../../services/client.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-my-reservations',
  templateUrl: './my-reservations.component.html',
  styleUrl: './my-reservations.component.scss'
})
export class MyReservationsComponent {

  reservations: any;

  constructor(private clientService: ClientService){}

  ngOnInit(){
    this.getAllReservations();
  }

  getAllReservations(){
    this.clientService.getAllReservations().subscribe(res=>{
      console.log(res);
      this.reservations = res;
    })
  }
}
