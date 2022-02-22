import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { LoginComponent } from './login/login/login.component';
import { MainComponent } from './my-account/main/main.component';
import { MisAnunciosComponent } from './my-account/mis-anuncios/mis-anuncios.component';
import { MisDatosComponent } from './my-account/mis-datos/mis-datos.component';
import { RegisterComponent } from './register/register/register.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'myaccount',component:MainComponent,children:[
    {path:'misdatos',component:MisDatosComponent},
    {path:'misanuncios',component:MisAnunciosComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
