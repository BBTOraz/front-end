import { Component } from '@angular/core';
import { UserStorageService } from './basic/services/storage/user-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'LawyerServiceApplication';

  isClientLoggedIn: boolean = UserStorageService.isClientLoggedIn();
  isLawyerLoggedIn: boolean = UserStorageService.isLawyerLoggedIn();

  constructor(private router: Router){}

  ngOnInit(){
    this.router.events.subscribe(event =>{
      this.isClientLoggedIn = UserStorageService.isClientLoggedIn();
      this.isLawyerLoggedIn = UserStorageService.isLawyerLoggedIn();
    })

  }

  logout(){
    UserStorageService.signOut();
    this.router.navigateByUrl('login');
  }
  
}
