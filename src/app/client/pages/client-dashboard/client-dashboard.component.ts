import { NgxSpinnerModule, NgxSpinnerService } from 'ngx-spinner';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClientService } from './../../services/client.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-client-dashboard',
  templateUrl: './client-dashboard.component.html',
  styleUrl: './client-dashboard.component.scss'
})
export class ClientDashboardComponent {
  index = 1;
  notEmptyPost = true;
  notScrolly = true;
  allData;
  validateForm!: FormGroup;

  constructor(private clientService: ClientService,
    private fb: FormBuilder,private spinner: NgxSpinnerService){}
  getInitLawyers(){
    this.clientService.loadInitLawyersCard().subscribe(data=>{
      console.log(data)
      this.allData = data;
    })
  }

  onScrolled(){
    if(this.notEmptyPost && this.notScrolly){
      this.spinner.show();
      this.notScrolly = false;
      this.loadNextLawyers();
    }
    console.log("index:" + this.index);
    this.index++
  }

  loadNextLawyers(){
    this.clientService.loadNextLawyersCard(this.index).subscribe(data=>{
      console.log(data)
      const nextCard = data;
      this.spinner.hide();
      if(nextCard.lenght === 0){
        this.notEmptyPost = false;
      }
      this.allData = this.allData.concat(nextCard);
      this.notScrolly = true;
    })
  }
  
  updateImg(img){
    return 'data:image/jpeg;base64,'+img;
  }

  ngOnInit(){
    this.validateForm = this.fb.group({
      fullname: [null, [Validators.required]]
    })
    //this.getAllLawyers();
    this.getInitLawyers();
  }

  searchLawyersByName(){
    this.clientService.searchLawyersByName(this.validateForm.get(['fullname']).value).subscribe(res=>{
      this.allData = res;
    })
  }

}
