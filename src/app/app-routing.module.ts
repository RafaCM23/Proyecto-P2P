import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './shared/not-found/not-found.component';


const routes: Routes = [

  {path:'',loadChildren:()=>import("./home/home.module").then(m=>m.HomeModule)},
  {path:'login',loadChildren:()=>import("./login/login.module").then(m=>m.LoginModule)},
  {path:'register',loadChildren:()=>import("./register/register.module").then(m=>m.RegisterModule)},
  {path:'nuevoAnuncio',loadChildren:()=>import("./anuncios/anuncios.module").then(m=>m.AnunciosModule)},
  {path:'myaccount',loadChildren:()=>import("./my-account/my-account.module").then(m=>m.MyAccountModule),data:{animation: 'HomePage'}},
  {path:'**',component:NotFoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
