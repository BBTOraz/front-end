import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { ClientService } from '../../services/client.service';
import { UserStorageService } from '../../../basic/services/storage/user-storage.service';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrl: './review.component.scss'
})
export class ReviewComponent {

  reservationId: number = this.activatedRoute.snapshot.params['id'];
  validateForm!: FormGroup;

  constructor(private fb: FormBuilder,
    private notification: NzNotificationService,
    private  router: Router,
    private clientService: ClientService,
    private activatedRoute: ActivatedRoute
  ){}

  ngOnInit(){
    this.validateForm = this.fb.group({
      rating: [null, [Validators.required]],
      review: [null, [Validators.required]],
    })
  }

  giveReview(){
    const reviewDTO = {
      rating: this.validateForm.get("rating").value,
      review: this.validateForm.get("review").value,
      clientId: UserStorageService.getUserId(),
      reservationId: this.reservationId
    }
    this.clientService.giveReview(reviewDTO).subscribe(res=>{
      this.notification
      .success(
        'SUCCESS',
        `review posted successfully`,
        { nzDuration: 5000}
      )
      this.router.navigateByUrl("/client/my-reservations");
    }, error=>{
      this.notification
      .error(
        'ERROR',
        `${error.error}`,
        { nzDuration: 5000}
      )
    })
  }
}
