import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }
  apiurl='http://localhost:3000/user';
  Proceedregister(inputdata:any){
    return this.http.post(this.apiurl,inputdata);
  }
  GetbyCode(email:any){
    return this.http.get(this.apiurl);
  }
}
