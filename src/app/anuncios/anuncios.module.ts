import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnunciosService } from './anuncios.service';
import { RouterModule, Routes } from '@angular/router';
import { CrearAnuncioComponent } from './crear-anuncio/crear-anuncio.component';
import { EditarAnuncioComponent } from './editar-anuncio/editar-anuncio.component';
import { FormsModule, NgForm } from '@angular/forms';


const routes: Routes = [

  {path:'nuevoAnuncio',component:CrearAnuncioComponent},
  {path:'editarAnuncio',component:EditarAnuncioComponent}

];

@NgModule({
  declarations: [  
    CrearAnuncioComponent, EditarAnuncioComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  providers:[AnunciosService]
})
export class AnunciosModule { }
