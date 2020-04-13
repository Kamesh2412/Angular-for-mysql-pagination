import { Injectable } from '@angular/core';
import{HttpClient, HttpHeaders} from '@angular/common/http'
import {Emp} from './emp'
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class HomeServiceService {

  constructor(private http:HttpClient) {
    
   }
   headers = new HttpHeaders().set('Content-Type', 'application/json');
   private url:string="http://localhost:3000/pagination"
   private csv:string="http://localhost:3000/getAll"
   getWebDetails(page,numPerPage):Observable<any>{
     console.log(page,numPerPage)
    return this.http.post<any>(this.url,JSON.stringify({page,numPerPage}),{headers: this.headers})
}

getCsvFile(){
  return this.http.get(this.csv,{responseType: 'blob',headers:this.headers})
}

// post(opost:Emp):Observable<any>{
//   return this.http.post(this.url,opost)
// }
}
 