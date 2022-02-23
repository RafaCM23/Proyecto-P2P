import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { LoginComponent } from './login/login/login.component';
import { MyAccountModule } from './my-account/my-account.module';
import { RegisterComponent } from './register/register/register.component';


const routes: Routes = [

  {path:'',loadChildren:()=>import("./home/home.module").then(m=>m.HomeModule)},
  {path:'login',loadChildren:()=>import("./login/login.module").then(m=>m.LoginModule)},
  {path:'register',loadChildren:()=>import("./register/register.module").then(m=>m.RegisterModule)},
  {path:'myaccount',loadChildren:()=>import("./my-account/my-account.module").then(m=>m.MyAccountModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
