import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { RouterModule, Routes } from '@angular/router';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';


const routes: Routes = [

  {path:'',component:RegisterComponent}
  
];

@NgModule({
  declarations: [
    RegisterComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule
  ]
})
export class RegisterModule { }
