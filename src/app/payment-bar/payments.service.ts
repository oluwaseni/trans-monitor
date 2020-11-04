import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'



@Injectable({
  providedIn: 'root'
})


export class PaymentsService {

  URL = 'https://jsonplaceholder.typicode.com/todos'

  posts: any[] = [];

  constructor(private http: HttpClient) { }


  getPayments(){
    return this.http.get<any>(this.URL)
  }

}
