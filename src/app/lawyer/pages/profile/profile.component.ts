import { Component } from '@angular/core';
import { LawyerService } from '../../services/lawyer.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {
pr: any;
  constructor(private lawyerService: LawyerService, ){}

  profile: any

  ngOnInit(){
    this.getLawyerByEmail();
  }

  getLawyerByEmail(){
    this.lawyerService.getLawyerByEmail().subscribe(res=> {
      this.profile = res;
    })
  }

  updateImg(img){
    return 'data:image/jpeg;base64,'+img;
  }
}
