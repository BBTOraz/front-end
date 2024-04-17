import { Injectable } from '@angular/core';

const TOKEN = 's_token';
const USER = 's_user';

@Injectable({
  providedIn: 'root'
})
export class UserStorageService {

  constructor() { }

  public saveToken(token: string): void{
    if(typeof window !== 'undefined'){
      window.localStorage.removeItem(TOKEN);
      window.localStorage.setItem(TOKEN, token);
    }
  }

  static getToken(): string{
    if(typeof window !== 'undefined'){
      return localStorage.getItem(TOKEN);
    }
    return null;
  }

  public saveUser(user: string): void{
    if(typeof window !== 'undefined'){
      window.localStorage.removeItem(USER);
      window.localStorage.setItem(USER, JSON.stringify(user));
    }
  }

  static getUser(): any{
    return JSON.parse(localStorage.getItem(USER));
  }

  static getUserId(): string{
    const user = this.getUser();
    if(user === null){return '';}
    return user.userId;
  }

  
  static getUserRole(): string{
    const user = this.getUser();
    if(user === null){return '';}
    return user.role;
  }

  static isClientLoggedIn(): boolean{
    if(this.getToken() === null){
      return false;
    }
    const role: string = this.getUserRole();
    return role == 'CLIENT';
  }

  static isLawyerLoggedIn(): boolean{
    if(this.getToken() === null){
      return false;
    }
    const role: string = this.getUserRole();
    return role == 'LAWYER';
  }

  static signOut(): void{
    if(typeof window !== 'undefined'){
      window.localStorage.removeItem(TOKEN);
      window.localStorage.removeItem(USER);
    }
  }
}
