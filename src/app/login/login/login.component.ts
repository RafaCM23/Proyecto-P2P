import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/users/users.service';
import { catchError, map } from 'rxjs/operators';
import Swal from 'sweetalert2';
import { AuthService } from 'src/app/auth/auth.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string = "";
  password: string = "";

  constructor(private userService: UsersService, private router: Router, private authService: AuthService) { }


  ngOnInit(): void {
  }
  //Envia la peticion de login
  login(){
    
    this.userService.compruebaLogin(this.email,this.password)
    .subscribe( resp => {
      const respuesta=JSON.stringify(resp["jwt-token"]);
      this.authService.setToken(respuesta.slice(1,respuesta.length-1));
      this.router.navigate(['/'])
      .then(() => {
        window.location.reload();
        });
    },error=>{
      Swal.fire({
      title:"Error al iniciar sesion",
      icon: 'error',
      text:'Compruebe el email y la contraseña',
      confirmButtonText:'Ok'
    }
    );}
    )
    
    
  }
}
