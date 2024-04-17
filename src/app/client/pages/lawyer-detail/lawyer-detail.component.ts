import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { ClientService } from '../../services/client.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { UserStorageService } from '../../../basic/services/storage/user-storage.service';

@Component({
  selector: 'app-lawyer-detail',
  templateUrl: './lawyer-detail.component.html',
  styleUrl: './lawyer-detail.component.scss'
})
export class LawyerDetailComponent {
  id = this.activatedRoute.snapshot.params['id'];
  avatarUrl: any;
  lawyer: any
  validateForm!: FormGroup;
  reviews: any;
  
  constructor(
    private clientService: ClientService,
    private activatedRoute: ActivatedRoute,
    private notification: NzNotificationService,
    private router: Router, 
    private fb: FormBuilder){}

  ngOnInit(){
    this.validateForm = this.fb.group({
      bookDate: [null, [Validators.required]]
    })
    this.getLawyerDetailsById();
  }

  getLawyerDetailsById(){
    this.clientService.getLawyerDetailsById(this.id).subscribe(res=>{
      console.log(res);
      this.avatarUrl = 'data:image/jpeg;base64,' + res.lawyerDTO.returnedImg;
      this.lawyer = res.lawyerDTO;
      this.reviews = res.reviewDTOs;
    })
  }

  bookService(){
    const bookSeriveDTO = {
      date: this.validateForm.get(['bookDate']).value,
      lawyerId: this.id,
      clientEmail: UserStorageService.getUserId()
    }

    this.clientService.bookService(bookSeriveDTO).subscribe(res=>{
      this.notification
      .success(
        'SUCCESS',
        `Request Posted Successfully`,
        {nzDuration: 5000}
      );
      this.router.navigateByUrl('/client/bookings')
    })
  }

}
