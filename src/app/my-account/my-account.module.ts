import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AppRoutingModule } from '../app-routing.module';
import { MisDatosComponent } from './mis-datos/mis-datos.component';
import { MisAnunciosComponent } from './mis-anuncios/mis-anuncios.component';
import { MyAccountService } from './my-account.service';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: '', component: MainComponent, children: [
      { path: '', component: MisDatosComponent },
      { path: 'misdatos', component: MisDatosComponent },
      { path: 'misanuncios', component: MisAnunciosComponent },
      { path: '**', component: MisDatosComponent },
    ]
  },

];

@NgModule({
  declarations: [
    MainComponent,
    MisDatosComponent,
    MisAnunciosComponent,
    SidebarComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    FormsModule
  ],
  providers: [
    MyAccountService
  ]
})
export class MyAccountModule { }
