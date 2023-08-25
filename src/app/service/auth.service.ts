import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

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
  //create by post
  postuser(data:any){
    return this.http.post(this.apiurl,data).pipe(map((res:any)=>{
      return res;
    }))
  }
  //get
  getuser(){
    return this.http.get(this.apiurl).pipe(map((res:any)=>{
      return res;
    }))
  }
  //update
  updateuser(data:any,id:number){
    return this.http.put(this.apiurl+"/"+id,data).pipe(map((res:any)=>{
      return res;
    }))
  }
  //delete
  deleteuser(id:number){
    return this.http.delete(this.apiurl+"/"+id).pipe(map((res)=>{
      return res;
    }))
  }
  // GetAll(){
  //   return this.http.get(this.apiurl);
  // }
  // Updateuser(id:any,inputdata:any){
  //   return this.http.put(this.apiurl+'/'+id,inputdata);
  // }
  //************************profile********************************//
  apiPro="http://localhost:3000/profile";
   
  postprofile(data:any){
    return this.http.post(this.apiPro,data).pipe(map((res:any)=>{
      return res;
    }));
  }
  getprofile(){
    return this.http.get(this.apiPro).pipe(map((res:any)=>{
      return res;
    }))
  }
  updateprofile(data:any,id:number){
    return this.http.put(this.apiPro+"/"+id,data).pipe(map((res:any)=>{
      return res;
    }))
  }
  deleteprofile(id:number){
    return this.http.delete(this.apiPro+"/"+id).pipe(map((res)=>{
      return res;
    }))
  }
  //************************reservation********************************//
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
   // logDetails
   logDetails = [
    {
      id:1,
      logName:"Zembra Sunset",
      logDetails:"Zembra Sunset.",
      logPrice:200 ,
      logImg:"https://media.istockphoto.com/id/1289388921/fr/photo/vue-sur-la-mer-sur-le-territoire-de-lh%C3%B4tel-de-tunisie.jpg?s=612x612&w=0&k=20&c=vDkmK-dUcKqX_122ZT9e_tSBS0ezkix6o2T5AqOC6Ac="
    },
    {
      id:2,
      logName:"Hammamet Golden",
      logDetails:"Onion| Green Capsicum|Mushroom |black olives , sweet corn , Red Paprika topped with Cheese",
      logPrice:369,
      logImg:"https://i.pinimg.com/originals/cc/18/f8/cc18f87d338e609406e08f2bf8c48e6b.jpg"
    },
    {
      id:3,
      logName:"La villa prestige ",
      logDetails:"panner",
      logPrice:149,
      logImg:"data:image/jpeg;base64,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"
    },
    {
      id:4,
      logName:"OutDOOR Bed",
      logDetails:"A homely mix of mashed potato and veggies, seasoned with Indian spices. A filling sure to take you back to mom's kitchen.",
      logPrice:140,
      logImg:"https://i.pinimg.com/originals/47/f5/25/47f525446e9f91fefa57e6a64edebf1c.png"
    },
    {
      id:5,
      logName:"Dar Bibeen",
      logDetails:"(Eggless) Indulge in richly decadent chocolate brownie crafted with love & topped with bitter-sweet chocolate that provides ultra-rich chocolate experience.",
      logPrice:105,
      logImg:"https://img.freepik.com/photos-premium/fenetre-arabe-bleue_379858-6423.jpg?w=2000"
    },
    {
      id:6,
      logName:"Jerba Merdiana",
      logDetails:"Oreo ice cream",
      logPrice:219,
      logImg:"data:image/jpeg;base64,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"
    },
    {
      id:7,
      logName:"Nabeul Room",
      logDetails:"(Eggless) Indulge in richly decadent chocolate brownie crafted with love & topped with bitter-sweet chocolate that provides ultra-rich chocolate experience.",
      logPrice:105,
      logImg:"https://www.marhba.com/images/maisonsdhotes/maisondhoteentunisie.jpg"
    },
    {
      id:8,
      logName:"Dar Mdina",
      logDetails:"(Eggless) Indulge in richly decadent chocolate brownie crafted with love & topped with bitter-sweet chocolate that provides ultra-rich chocolate experience.",
      logPrice:105,
      logImg:"https://tunisie.co/uploads/images/content/darya-12021-01.jpg"
    }
  ]

}
