import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Catagory } from 'src/Model/Catagory';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CatagoryService {

  private baseUrl = 'https://localhost:7100/api/';
  constructor(private http : HttpClient) { }
  
  getCatagories():Observable<Catagory[]>
  {
    return this.http.get<Catagory[]>(this.baseUrl + 'catagories');
  }
}
