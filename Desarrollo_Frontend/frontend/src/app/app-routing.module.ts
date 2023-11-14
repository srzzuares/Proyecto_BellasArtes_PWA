import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from "./Components/about/about.component";
import { CarruselComponent } from "./Components/carrusel/carrusel.component";
// import { FooterComponent } from "./Components/footer/footer.component";
import { HomeComponent } from "./Components/home/home.component";
import { LoginComponent } from './Components/login/login.component';
// import { NavbarComponent } from "./Components/navbar/navbar.component";
import {  SignupComponent} from "./Components/signup/signup.component";
import { CatalogoComponent } from "./Components/catalogo/catalogo.component";
import { ArtistaComponent } from "./Components/artista/artista.component";

const routes: Routes = [
{path: 'about', component: AboutComponent},
{path: 'carrusel', component: CarruselComponent},
{path: 'home', component:HomeComponent},
{path: 'login', component:LoginComponent},
{path: 'signup', component:SignupComponent },
{path: 'artista', component:ArtistaComponent},
{path: 'catalogo', component:CatalogoComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
