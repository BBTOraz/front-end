import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { LawyerService } from '../../services/lawyer.service';
import { error } from 'console';

@Component({
  selector: 'app-create-profile',
  templateUrl: './create-profile.component.html',
  styleUrl: './create-profile.component.scss'
})
export class CreateProfileComponent {

  id: any = this.activatedRoute.snapshot.params['id'];

  selectedFile: File | null;
  imagePreview: string | ArrayBuffer | null;
  validateForm!: FormGroup;
  existingImg: string | null = null;

  isImageChanged= false;
  constructor(private fb: FormBuilder,
    private notification: NzNotificationService,
    private router: Router,
    private lawyerService: LawyerService,
    private activatedRoute: ActivatedRoute,
    ){}


    ngOnInit(){
      this.validateForm = this.fb.group({
        email: [null, [Validators.required]],
        street:[null, [Validators.required]],
        building:[null, [Validators.required]],
        city: [null, Validators.required],
        phone: [null, Validators.required],
        description: [null]
      })
      this.getLawyerById();
    }

    onFileSelected(event: any){
      this.selectedFile = event.target.files[0];
      this.previewImage();
      this.existingImg = null;
      this.isImageChanged = true;
    }

    previewImage(){
      const reader = new FileReader();
      reader.onload = () => {
        this.imagePreview = reader.result;
      }
      reader.readAsDataURL(this.selectedFile);
    }

    postAd(){
      const formData: FormData = new FormData();
      if(this.imagePreview && this.selectedFile){
        formData.append('img', this.selectedFile);
      }
      formData.append('email', this.validateForm.get('email').value);
      formData.append('street', this.validateForm.get('street').value);
      formData.append('building', this.validateForm.get('building').value);
      formData.append('city', this.validateForm.get('city').value);
      formData.append('phone', this.validateForm.get('phone').value);
      formData.append('description', this.validateForm.get('description').value);


      this.lawyerService.postAd(this.id, formData).subscribe(res=>{
        this.notification
        .success(
          'SUCCESS',
          `Profile updated successfuly`,
          { nzDuration: 5000}
        );
        this.router.navigateByUrl('/lawyer/dashboard');
      }, error =>{
        this.notification
        .error(
          'ERROR',
          `${error.error}`,
          { nzDuration: 5000}
        )
      }
      )
    }

    getLawyerById(){
      this.lawyerService.getLawyerById(this.id).subscribe(res=>{
        console.log(res);
        this.validateForm.patchValue(res);
        this.existingImg = 'data:image/jpeg;base64,' + res.returnedImg;
      })
    }
}
