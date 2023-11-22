import { Component, OnInit } from '@angular/core';
import { artistaService } from '../../services/artista-serv.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styleUrls: ['./artista.component.css']
})
export class ArtistaComponent implements OnInit{
  artistas: any[] = [];
  
  constructor(private ArtistaService: artistaService, private router: Router) {} // Inyecta el Router
  
  ngOnInit(): void {
    this.loadJoyerias();
  }
  
  loadJoyerias() {
    this.ArtistaService.GetArtista().subscribe((data) => {
      this.artistas = data.data;
      console.log(data)
    });
  }
  
  navigateToJpyeriaPieza(id: number) {
    this.router.navigate(['/artista/', id]); // Redirige al usuario al componente "ropa-pieza" con el ID
  }

}

