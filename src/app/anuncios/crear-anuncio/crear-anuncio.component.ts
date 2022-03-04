import { ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { MyAccountService } from 'src/app/my-account/my-account.service';
import Swal from 'sweetalert2';
import { anuncio } from '../anuncio.interface';
import { AnunciosService } from '../anuncios.service';

@Component({
  selector: 'app-crear-anuncio',
  templateUrl: './crear-anuncio.component.html',
  styleUrls: ['./crear-anuncio.component.css']
})
export class CrearAnuncioComponent implements OnInit {


  @ViewChild('miFormulario') miFormulario!: NgForm;
  
  anuncio:anuncio={
    id:0,
    img:"",
    titulo:"",
    descripcion:"cosas",
    comentarios:[]

  }
  modelo={
    img:"",
    titulo:"",
    descripcion:""
  }


  imprime(){
    console.log(this.modelo)
  }


  constructor(private anuncioService:AnunciosService, private accountService: MyAccountService, private router: Router) { }

  ngOnInit(): void {
    this.getUsuario();
  }

  imgValida(): boolean {
    const regex:RegExp=/((http:\/\/)|(https:\/\/)).*(\.png|\.jpg|\.jpeg)/gm
   if(this.modelo.img.length<11 || !regex.test(this.modelo.img)){
     return false;
   }
     return true;
 }

 tituloValido(): boolean {
   return this.miFormulario?.controls['titulo'].invalid 
           && this.miFormulario?.controls['titulo'].touched;
 }
 descripcionValida(): boolean {
   return this.miFormulario?.controls['descripcion'].invalid 
           && this.miFormulario?.controls['descripcion'].touched;
 }

  getUsuario(){
    const usuario= this.accountService.getDatos();
  }

  guardar(){
    if( !this.imgValida() || this.miFormulario.invalid ){
      
      Swal.fire({
        title:'Formulario no valido',
        icon: 'error',
        text:'Compruebe los campos',
        confirmButtonText:'ok'
      }
    );
    }
    else{
      this.anuncio.img=this.modelo.img;
      this.anuncio.descripcion=this.modelo.descripcion;
      this.anuncio.titulo=this.modelo.titulo;
      this.anuncioService.postAnuncio(this.anuncio).subscribe(
        resp=>{
          Swal.fire({
            title:'Anuncio guardado con éxito',
            icon: 'success',
            confirmButtonText:'ok'
          }
        )
        .then(resultado => {
          if (resultado.value) {
              //Dice que si
              this.router.navigateByUrl("/myaccount/misanuncios")
          } 
      });

        },error=>{
        Swal.fire({
          title:'Algo ha salido mal...',
          icon: 'error',
          text:'Compruebe que el anuncio le pertenece y que los cambios son válidos',
          confirmButtonText:'ok'
        }
      );
      })
    }

  }

}
