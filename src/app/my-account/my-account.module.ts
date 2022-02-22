import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AppRoutingModule } from '../app-routing.module';
import { MisDatosComponent } from './mis-datos/mis-datos.component';
import { MisAnunciosComponent } from './mis-anuncios/mis-anuncios.component';
import { MyAccountService } from './my-account.service';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    MainComponent,
    SidebarComponent,
    MisDatosComponent,
    MisAnunciosComponent
  ],
  imports:[
    CommonModule,
    AppRoutingModule,
    FormsModule
    ],
  providers:[
   MyAccountService
  ]
})
export class MyAccountModule { }
