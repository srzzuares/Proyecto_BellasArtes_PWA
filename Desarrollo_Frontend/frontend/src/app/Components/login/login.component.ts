import { Component } from '@angular/core';
import { Router } from '@angular/router';  // Import the Router

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor( private router: Router) { }
  
  onSubmit() {
  this.router.navigate(['home']);  // Navigate to 'home' for role 2
      
  }
}