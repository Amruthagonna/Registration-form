import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Watch } from '../models/watch';

@Injectable({
  providedIn: 'root'
})
export class WatchService {
  private baseurl="https://sheetdb.io/api/v1/ypin6d0b3m1uz"
  constructor( private http:HttpClient) { 
  }
  submitting():Observable<Watch[]>{
  return this.http.get<Watch[]>(this.baseurl)
  }
}

