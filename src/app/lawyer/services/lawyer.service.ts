import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserStorageService } from '../../basic/services/storage/user-storage.service';

const BASIK_URL = 'http://localhost:8181/'

@Injectable({
  providedIn: 'root'
})
export class LawyerService {

  constructor(private http: HttpClient) { }

  postAd(id: any, lawyersProfileDTO: any): Observable<any>{
    return this.http.put(BASIK_URL + `api/lawyer/my-profile/${id}`, lawyersProfileDTO, {
      headers: this.createAuthorizationHeader()
    })
  }

  getLawyerByEmail(): Observable<any>{
    const email = UserStorageService.getUserId();
    return this.http.get(BASIK_URL + `api/lawyer/my-profile/${email}`, {
      headers: this.createAuthorizationHeader()
    })
  }
  
  getAllReservation(): Observable<any>{
    const email = UserStorageService.getUserId();
    return this.http.get(BASIK_URL + `api/lawyer/reservation/${email}`, {
      headers: this.createAuthorizationHeader()
    })
  }

  changeReservationStatus(reservationId: any, status:string): Observable<any>{
    return this.http.post(BASIK_URL + `api/lawyer/reservation/${reservationId}/${status}`, null, {
      headers: this.createAuthorizationHeader()
    })
  }

  getLawyerById(id: any): Observable<any>{
    return this.http.get(BASIK_URL + `api/lawyer/edit/my-profile/${id}`,{
      headers: this.createAuthorizationHeader()
    })
  }

  createAuthorizationHeader(): HttpHeaders{
    let authHeaders: HttpHeaders = new HttpHeaders();
    return authHeaders.set(
      'Authorization',
      'Bearer ' + UserStorageService.getToken()
    )
  }
}
