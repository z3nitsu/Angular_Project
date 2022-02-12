import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';
import { Childs } from '../interface/child';


@Injectable({
  providedIn: 'root'
})
export class ChildService {

  constructor(private http: HttpClient) { 
  }

  public getJSON(): Observable<Childs[]> {
    return this.http.get<Childs[]>("./assets/child.json");
} 
}
