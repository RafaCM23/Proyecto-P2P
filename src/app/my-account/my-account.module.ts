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
import { AuthGuard } from '../AuthGuard';
import { NotFoundComponent } from '../shared/not-found/not-found.component';
import { DataTablesModule } from 'angular-datatables';

const routes: Routes = [

  {
    path: '', component: MainComponent, children: [
      { path: '',canActivate:[AuthGuard], component: MisDatosComponent },
      { path: 'misdatos',canActivate:[AuthGuard], component: MisDatosComponent },
      { path: 'misanuncios',canActivate:[AuthGuard], component: MisAnunciosComponent },
      { path: '**',canActivate:[AuthGuard], component: NotFoundComponent },
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
    FormsModule,   
    DataTablesModule
  ],
  providers: [
    MyAccountService
  ]
})
export class MyAccountModule { }
