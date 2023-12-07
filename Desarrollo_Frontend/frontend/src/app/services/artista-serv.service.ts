import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class artistaService { // Cambia el nombre de la clase a 
  private apiUrl = 'https://backend-bellasartes.onrender.com/artista/'; // Cambia la URL de la API

  constructor(private http: HttpClient) {}

  GetArtista(): Observable<any> { // Cambia el nombre del método
    return this.http.get(this.apiUrl);
  }
  GetOneArtista(id: number): Observable<any> { // Cambia el nombre del método
    const url = `${this.apiUrl}/${id}`;
    return this.http.get(url);
  }
}


