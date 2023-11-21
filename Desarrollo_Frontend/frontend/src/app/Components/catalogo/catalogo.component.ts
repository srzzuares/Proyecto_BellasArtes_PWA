import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CatalogoService } from 'src/app/services/catalogo.service';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  catalogo:any[]=[];

}
