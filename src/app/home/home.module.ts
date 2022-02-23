import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AnunciosModule } from '../anuncios/anuncios.module';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {path:'',component:HomeComponent}
  
];


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    AnunciosModule
  ]
})
export class HomeModule { }
