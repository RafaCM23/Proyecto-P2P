import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
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

 

  constructor(private router: Router,private userService:UsersService,private authService: AuthService, private fb: FormBuilder,private emailValidator:EmailvalidatorService,
    private nickValidator:NickOcupadoService) { }

  ngOnInit(): void {
    this.registroForm.reset({
      terminos:false,
      mayorEdad:false
    })
  }
  //formulario
  registroForm: FormGroup = this.fb.group({
    nombre: ['',[Validators.required, Validators.minLength(4)]],                    //validador externo
    usuario: ['',[Validators.required, Validators.minLength(5),this.usuarioValido],[this.nickValidator]],
    contrasenia: ['',[Validators.required, Validators.minLength(5)]],
    recontrasenia: ['',[Validators.required, Validators.minLength(5)]],
    email: ['',[Validators.required,this.emailValido],[this.emailValidator]],//validador externo
    mayorEdad: [false,Validators.requiredTrue],
    terminos: [false, Validators.requiredTrue],
  }
  ,{//validadores extra
    validators:[this.contraValida('contrasenia','recontrasenia')],
   }
  )
   //Devuelve si el campo presenta errores
  campoEsValido(campo:string){
    return this.registroForm.controls[campo].errors && this.registroForm.controls[campo].touched;
  }

  //comprueba contraseña
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

  //devuelve el tipo de error del email
  get emailErrorMsg(): string {
    
    const errors = this.registroForm.get('email')?.errors!;
    if(errors['emailOcupado']){
      return 'El email ya está ocupado';
    }
    else if ( errors['noValido'] ) {
      return 'El email no cumple el formato correcto';
    } 
    else if ( errors['required'] ) {
      return 'Email es obligatorio';
    }

    return '';
  }

  // devuelve el tipo de error del usuario
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

  //comprueba si el campo usuario es validi
  usuarioValido(control:FormControl): ValidationErrors | null{
    
      const user = control?.value;  
      if(user?.length<5){
        return { noValido:true }
      }

      
      return null
    
}

//comprueba si el campo email es valido
  emailValido(control:FormControl): ValidationErrors | null{
    

      const correo = control?.value;
     var regex = new RegExp('^[^@]+@[^@]+\.[a-zA-Z]{2,}$')
     var resultado=regex.test(correo);
      if(resultado!=true){
        return { noValido:true}
      }

      
      return null
    }
  
    //valioda el formulario
    validar(){

    if ( this.registroForm.invalid)  {
      this.registroForm.markAllAsTouched();
      console.log("invalido");
      return
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

    //guarda los datos del usuario 
   enviarDatos(correo:string,password:string,name:string,nickname:string){      
       
       this.userService.register(correo,password,name,nickname).subscribe(data => {

        const respuesta=JSON.stringify(data["jwt-token"]);
        this.authService.setToken(respuesta.slice(1,respuesta.length-1));
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

