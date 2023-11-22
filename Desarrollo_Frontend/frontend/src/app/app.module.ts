import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { FooterComponent } from './Components/footer/footer.component';
import { CarruselComponent } from './Components/carrusel/carrusel.component';
import { HomeComponent } from './Components/home/home.component';
import { LoginComponent } from './Components/login/login.component';
import { AboutComponent } from './Components/about/about.component';
import { SignupComponent } from './Components/signup/signup.component';
import { CatalogoComponent } from './Components/catalogo/catalogo.component';
import { ArtistaComponent } from './Components/artista/artista.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    CarruselComponent,
    HomeComponent,
    LoginComponent,
    AboutComponent,
    SignupComponent,
    CatalogoComponent,
    ArtistaComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
