import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { usuario } from 'src/app/anuncios/anuncio.interface';
import Swal from 'sweetalert2';
import { MyAccountService } from '../my-account.service';

@Component({
  selector: 'app-mis-datos',
  templateUrl: './mis-datos.component.html',
  styleUrls: ['./mis-datos.component.css']
})
export class MisDatosComponent implements OnInit {

  constructor(private servicio: MyAccountService, private router: Router) { }

  ngOnInit(): void {
    this.imprimeDatos();
  }
  user:usuario={
    id:0,
    name:'',
    nickname:'',
    email:'',
    provincia:'',
    token:''
  };
  copia:usuario={
    id:0,
    name:'',
    nickname:'',
    email:'',
    provincia:'',
    token:''
  };
  
  imprimeDatos(){
    this.servicio.getDatos().subscribe(
      resp=>{
        console.log(resp);
        this.user=resp;
        this.copia=resp;
      },error=>{
        console.log(error);
      }
    )
  }

  guardaDatos(){


   this.servicio.putDatos(this.user).subscribe(
     resp=>{
      Swal.fire({
        title:'Datos actualizados',
        icon: 'success',
        confirmButtonText:'Ok'
      }
    );
      
     },
     error=>{
      Swal.fire({
        title:'Error al guardar los datos',
        icon: 'error',
        confirmButtonText:'Entendido'
      }
    );
     }
   )
  }


  nickOcupado(){

  }

}
