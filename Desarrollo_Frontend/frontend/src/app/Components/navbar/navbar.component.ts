import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  // Agrega una propiedad para controlar el estado del menú
  isMenuOpen = false;
  closeMenu() {
    this.isMenuOpen = false;
  }

  // Define la función para alternar el estado del menú
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
