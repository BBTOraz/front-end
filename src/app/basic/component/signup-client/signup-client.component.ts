import { AuthService } from './../../services/auth/auth.service';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NzNotificationService } from 'ng-zorro-antd/notification';

@Component({
  selector: 'app-signup-client',
  templateUrl: './signup-client.component.html',
  styleUrl: './signup-client.component.scss'
})
export class SignupClientComponent {

  validetForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private notification: NzNotificationService,
    private router: Router){}

    ngOnInit(){
      this.validetForm = this.fb.group({
        email: [null, [Validators.email, Validators.required]],
        firstname: [null, [Validators.required]],
        lastname: [null, [Validators.required]],
        phone: [null],
        password: [null, [Validators.required]],
        checkPassword: [null, [Validators.required]],
      })
    }

    submitForm(){
      this.authService.registerClient(this.validetForm.value).subscribe(res => {
        this.notification.success(
          'SUCCESS',
          'Signup successfull',
          {nzDuration: 5000}
        );
        this.router.navigateByUrl('/login')
      }, error => {
        this.notification.error(
          'ERROR',
          `${error.error}`,
          {nzDuration: 5000}
        )
      });
    }
}
