import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnuncioComponent } from './anuncio/anuncio.component';
import { CreaAnuncioComponent } from './crea-anuncio/crea-anuncio.component';
import { EditaAnuncioComponent } from './edita-anuncio/edita-anuncio.component';



@NgModule({
  declarations: [
    AnuncioComponent,
    CreaAnuncioComponent,
    EditaAnuncioComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AnunciosModule { }
