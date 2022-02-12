import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';
import { Parents } from '../interface/parent';


@Injectable({
  providedIn: 'root'
})
export class ParentService {

  constructor(private http: HttpClient) { 
  }

  public getJSON(): Observable<Parents[]> {
    return this.http.get<Parents[]>("./assets/parent.json");
} 
}
