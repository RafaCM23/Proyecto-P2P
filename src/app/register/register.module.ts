import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { RouterModule } from '@angular/router';
import { UsersService } from '../users/users.service';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ValidatorService } from './validator.service';



@NgModule({
  declarations: [
    RegisterComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  providers:[
    ValidatorService
  ]
})
export class RegisterModule { }
