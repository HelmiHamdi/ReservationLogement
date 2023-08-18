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
  // GetAll(){
  //   return this.http.get(this.apiurl);
  // }
  // Updateuser(id:any,inputdata:any){
  //   return this.http.put(this.apiurl+'/'+id,inputdata);
  // }
  apiRes='http://localhost:3000/reservation';
  postReservation(inputdata:any){
    return this.http.post(this.apiRes,inputdata);
  }
  getReservation(){
    return this.http.get(this.apiRes);
  }
  putReservation(data:any,id:number){
    return this.http.put(this.apiRes+"/"+id,data);
  }
  deleteReservation(id:number){
    return this.http.delete(this.apiRes+"/"+id);
  }
}
