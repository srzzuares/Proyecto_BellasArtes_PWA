import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CatalogoService } from 'src/app/services/catalogo.service';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {
  catalogo: any[] = [];
  
  constructor(private CatalogoService: CatalogoService, private router: Router) {} // Inyecta el Router
  
  ngOnInit(): void {
    this.loadJoyerias();
  }

  loadJoyerias() {
    this.CatalogoService.GetPintura().subscribe((data) => {
      this.catalogo = data.data;
      console.log(data)
    });
  }
  
  navigateToJpyeriaPieza(id: number) {
    this.router.navigate(['/pinturas/', id]); // Redirige al usuario al componente "ropa-pieza" con el ID
  }

}

