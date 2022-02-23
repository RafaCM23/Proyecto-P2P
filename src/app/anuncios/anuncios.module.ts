import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnunciosService } from './anuncios.service';
import { Routes } from '@angular/router';
import { HomeModule } from '../home/home.module';
import { CrearAnuncioComponent } from './crear-anuncio/crear-anuncio.component';



@NgModule({
  declarations: [
  
    CrearAnuncioComponent
  ],
  imports: [
    CommonModule
  ],
  providers:[AnunciosService]
})
export class AnunciosModule { }
