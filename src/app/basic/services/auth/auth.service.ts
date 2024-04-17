import { UserStorageService } from './../storage/user-storage.service';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

const BASIC_URL = 'http://localhost:8181/';
export const AUTH_HEADER = 'authorization';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient,
    private userStorageService: UserStorageService) { }

  registerClient(signupRequestDTO: any): Observable<any>{
    return this.http.post(BASIC_URL + 'client/register', signupRequestDTO)
  }

  login(username: string, password: string){
    return this.http.post(BASIC_URL + 'client/auth', {username, password}, {observe: 'response'})
    .pipe(
      map((res: HttpResponse<any>) =>{
        console.log(res.body)
        this.userStorageService.saveUser(res.body);
        const tokenLength = res.headers.get(AUTH_HEADER)?.length;
        const bearerToken = res.headers.get(AUTH_HEADER)?.substring(7, tokenLength)
        console.log(bearerToken)
        this.userStorageService.saveToken(bearerToken);
        return res;
      }) 
    );
  }
}
