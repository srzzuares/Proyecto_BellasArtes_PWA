import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CatalogoService {

  private apiUrl = 'http://localhost:5999/pinturas/'; 

  constructor(private http: HttpClient) {}

  GetPintura(): Observable<any> { 
    return this.http.get(this.apiUrl);
  }
  GetOnePintura(id: number): Observable<any> { 
    const url = `${this.apiUrl}/${id}`;
    return this.http.get(url);
  }
}
