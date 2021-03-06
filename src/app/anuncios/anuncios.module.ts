import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnunciosService } from './anuncios.service';
import { RouterModule, Routes } from '@angular/router';
import { CrearAnuncioComponent } from './crear-anuncio/crear-anuncio.component';
import { EditarAnuncioComponent } from './editar-anuncio/editar-anuncio.component';
import { FormsModule, NgForm } from '@angular/forms';
import { VerAnuncioComponent } from './ver-anuncio/ver-anuncio.component';
import { AuthGuard } from '../AuthGuard';


const routes: Routes = [

  {path:'nuevoAnuncio',canActivate:[AuthGuard],component:CrearAnuncioComponent},
  {path:'editarAnuncio/:id',canActivate:[AuthGuard],component:EditarAnuncioComponent},
  {path:'verAnuncio/:id',component:VerAnuncioComponent}
  
];

@NgModule({
  declarations: [  
    CrearAnuncioComponent, EditarAnuncioComponent, VerAnuncioComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  providers:[AnunciosService]
})
export class AnunciosModule { }
