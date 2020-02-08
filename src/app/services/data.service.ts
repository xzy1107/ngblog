import { environment } from './../../environments/environment.prod';
import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PageTitle } from '../models/page';

@Injectable({
  providedIn: 'root'
})
export class DataService implements OnInit{
  private baseUrl: string

  constructor(
    private http: HttpClient,
  ) { 
    this.baseUrl = environment.baseUrl
  }

  getPageTitle(): Observable<PageTitle[]> {
    return this.http.get<PageTitle[]>(this.baseUrl+"/wp-json/wp/v2/pages?_fields=id,slug,status,title,menu_order,author")
  }
  getSiteName(): Observable<any> {
    return this.http.get<any>(this.baseUrl+"/wp-json")
  }

  ngOnInit(){
  
  }
}
