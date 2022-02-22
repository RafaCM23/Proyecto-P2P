import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { usuario } from 'src/app/anuncios/anuncio.interface';
import { UsersService } from 'src/app/users/users.service';
import Swal from 'sweetalert2';

import { EmailvalidatorService } from './emailvalidator.service';
import { NickOcupadoService } from './nick-ocupado.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  

  constructor(private router: Router, private userService: UsersService, private fb: FormBuilder,private emailValidator:EmailvalidatorService,
    private nickValidator:NickOcupadoService) { }

  ngOnInit(): void {
    
  }

  registroForm: FormGroup = this.fb.group({
    nombre: ['',[Validators.required, Validators.minLength(4)]],
    usuario: ['',[Validators.required, Validators.minLength(5)],[this.nickValidator]],
    contrasenia: ['',[Validators.required, Validators.minLength(5)]],
    recontrasenia: ['',[Validators.required, Validators.minLength(5)]],
    email: ['',[Validators.required],[this.emailValidator]],
    mayorEdad: [false,Validators.requiredTrue],
    terminos: [false, Validators.requiredTrue],
  },{
    validators:[this.contraValida('contrasenia','recontrasenia'),
    this.emailValido('email'),this.usuarioValido('usuario')],
   })


  campoEsValido(campo:string){
    return this.registroForm.controls[campo].errors && this.registroForm.controls[campo].touched;
  }


  // checkboxValido(campo:string){
  //   return (formGroup: AbstractControl): ValidationErrors | null =>{


  //     if( formGroup.get(campo)?.errors && !formGroup.get(campo)?.touched){
  //       formGroup.get(campo)?.setErrors({noChecked:true});

  //         return {noChecked:true};
  //       }
  //     else{
  //       formGroup.get(campo)?.setErrors(null);
  //      return null;
  //     }
  //   }
 
  // }
  contraValida(psw1:string, psw2:string){
    return (formGroup: AbstractControl): ValidationErrors | null =>{
      const pass1 = formGroup.get(psw1)?.value;
      const pass2 = formGroup.get(psw2)?.value;
      if ( pass1 !== pass2  || pass2==null) {
        formGroup.get(psw2)?.setErrors({ noIguales: true });
        return { noIguales: true }
      } 



      formGroup.get(psw2)?.setErrors(null);

      return null
    }
  }
  get emailErrorMsg(): string {
    
    const errors = this.registroForm.get('email')?.errors!;
    if ( errors['required'] ) {
      return 'Email es obligatorio';
    } else if ( errors['noValido'] ) {
      return 'El email no cumple el formato correcto';
    } else if ( errors['emailOcupado'] ) {
      return 'El email ya está ocupado';
    }

    return '';
  }
  get usuarioErrorMsg(): string {
    
    const errors = this.registroForm.get('usuario')?.errors!;
    if ( errors['required'] ) {
      return 'usuario obligatorio';
    } else if ( errors['noValido'] ) {
      return 'El usuario debe tener 5 caracteres';
    } else if ( errors['nickOcupado'] ) {
      return 'El usuario ya está ocupado';
    }

    return '';
  }

  usuarioValido(usuario:string){
    
    return (formGroup: AbstractControl): ValidationErrors | null =>{

      const user = formGroup.get(usuario)?.value;
     
  
      if(user.length<5){
        formGroup.get(usuario)?.setErrors({noValido:true});
        return {noValido:true}
      }


      formGroup.get(usuario)?.setErrors({noValido:false});
      
      return null
    }
}
  emailValido(email:string){
    return (formGroup: AbstractControl): ValidationErrors | null =>{

      const correo = formGroup.get(email)?.value;
     
     var regex = new RegExp('^[^@]+@[^@]+\.[a-zA-Z]{2,}$')
     var resultado=regex.test(correo);
      if(resultado!=true){
        formGroup.get(email)?.setErrors({noValido:true});
        return {noValido:true}
      }


      formGroup.get(email)?.setErrors(null);
      
      return null
    }
    

  }
 
  
  


    validar(){

    if ( this.registroForm.invalid)  {
      this.registroForm.markAllAsTouched();
    }
    else{
      const correo = this.registroForm.get('email')?.value;
      const password = this.registroForm.get('contrasenia')?.value;
      
       const name=this.registroForm.get('nombre')?.value;
       const nickname=this.registroForm.get('usuario')?.value;
      
      
    this.enviarDatos(correo,password,name,nickname);
     this.registroForm.reset();
    }
    }
   enviarDatos(correo:string,password:string,name:string,nickname:string){
    //falta enviar nombre, nick
      
      this.userService.register(correo,password,name,nickname).subscribe(data => {
        this.userService.setToken(data.token);
        this.router.navigateByUrl('/');
      },
      error=>{
        Swal.fire({
          title:'Ha habido un error en la transacción',
          icon: 'error',
          confirmButtonText:'Ok'
        }
      );
  })
}
}

