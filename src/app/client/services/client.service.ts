import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserStorageService } from '../../basic/services/storage/user-storage.service';
import { Observable } from 'rxjs';

const BASIK_URL = 'http://localhost:8181/'

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http: HttpClient,) { }

  getAllLawyers(): Observable<any>{
    return this.http.get(BASIK_URL + `api/client/lawyers`, {
      headers: this.createAuthorizationHeader()
    })
  }

  loadInitLawyersCard(): Observable<any>{
    const page = 0;
    return this.http.get(BASIK_URL + `api/client/load/lawyers/${page}`, {
      headers: this.createAuthorizationHeader()
    })
  }

  loadNextLawyersCard(page: any): Observable<any>{
    return this.http.get(BASIK_URL + `api/client/load/lawyers/${page}`, {
      headers: this.createAuthorizationHeader()
    })
  }

  searchLawyersByName(name: any): Observable<any>{
    console.log("client service: " + name)
    return this.http.get(BASIK_URL + `api/client/search/${name}`, {
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

  getLawyerDetailsById(id: any): Observable<any>{
    return this.http.get(BASIK_URL + `api/client/lawyer/${id}`, {
      headers: this.createAuthorizationHeader()
    })
  }

  bookService(bookDTO: any): Observable<any>{
    console.log(bookDTO)
    return this.http.post(BASIK_URL + `api/client/reservation`, bookDTO,  {
      headers: this.createAuthorizationHeader()
    })
  }

  getAllReservations(): Observable<any>{
    const email = UserStorageService.getUserId();
    return this.http.get(BASIK_URL + `api/client/my-reservations/${email}`, {
      headers: this.createAuthorizationHeader()
    })
  }

  giveReview(reviewDTO: any): Observable<any>{
    return this.http.post(BASIK_URL + `api/client/review`, reviewDTO, {
      headers: this.createAuthorizationHeader()
    })
  }

  searchLawyers(filters: any): Observable<any> {
    console.log("filters:" + filters);
    return this.http.post(BASIK_URL + `api/client/search`, filters, {
      headers: this.createAuthorizationHeader()
    });
  }

}
