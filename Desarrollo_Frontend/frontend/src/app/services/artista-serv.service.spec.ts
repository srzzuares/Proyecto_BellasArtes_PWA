import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class artistaService { // Cambia el nombre de la clase a JoyeriaArtesanalService
  private apiUrl = 'http://localhost:5999/artista/'; // Cambia la URL de la API

  constructor(private http: HttpClient) {}

  GetArtista(): Observable<any> { // Cambia el nombre del método
    return this.http.get(this.apiUrl);
  }

  GetOneArtista(id: number): Observable<any> { // Cambia el nombre del método
    const url = `${this.apiUrl}/${id}`;
    return this.http.get(url);
  }
}


// describe('ArtistaServService', () => {
//   let service: ArtistaServService;

//   beforeEach(() => {
//     TestBed.configureTestingModule({});
//     service = TestBed.inject(ArtistaServService);
//   });

//   it('should be created', () => {
//     expect(service).toBeTruthy();
//   });
// });
