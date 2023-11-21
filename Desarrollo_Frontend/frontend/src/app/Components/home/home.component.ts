import { Component, OnInit } from '@angular/core';
import { artistaService } from 'src/app/services/artista-serv.service';
import { CatalogoService } from 'src/app/services/catalogo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  artistas: any[] = []; // Array para almacenar los datos de las artesanías
  catalogo: any[] = []; // Array para almacenar las joyerías

  constructor(
    private artista: artistaService,
    private pintura: CatalogoService,
    private router: Router
  ) {}

  ngOnInit(): void {
    //this.loadpintura();
    this.loadArtista();
  }

  loadArtista() {
    this.artista.GetArtista().subscribe((data) => {
      this.artistas = data.slice(0, 3); 
    });}
    
  // loadpintura() {
  //   this.pintura.getRopaArtesanales().subscribe((data) => {
  //     this.catalogo = data.slice(0, 3); 
  //   });
  // }
  
  //}

  navigateToartistas(id: number) {
    this.router.navigate(['/artista/', id]); // Redirige al usuario al componente "ropa-pieza" con el ID
  }
  // navigateToJpyeriaPieza(id: number) {
  //   this.router.navigate(['/joyeria-pieza', id]); // Redirige al usuario al componente "ropa-pieza" con el ID
  // }
}
