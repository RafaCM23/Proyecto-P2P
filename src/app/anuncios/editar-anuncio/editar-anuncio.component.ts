import { ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AnunciosService } from '../anuncios.service';
import { anuncio, comentario} from '../anuncio.interface';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-editar-anuncio',
  templateUrl: './editar-anuncio.component.html',
  styleUrls: ['./editar-anuncio.component.css']
})
export class EditarAnuncioComponent implements OnInit {

  @ViewChild('miFormulario') miFormulario!: NgForm;
  

  formulario = {
    id:0,
    img:'',
    titulo:'',
    descripcion:'',
    comentarios: null,
  }
  anuncio:anuncio={
    id:0,
    img:'',
    titulo:'',
    descripcion:'',
    comentarios: [],
  }


  constructor(private anuncioService:AnunciosService) { }

  ngOnInit(): void {
    this.getAnuncio();
  }

  imgValida(): boolean {
     const regex:RegExp=/((http:\/\/)|(https:\/\/)).*(\.png|\.jpg|\.jpeg)/gm
    if(this.formulario.img.length<11 || !regex.test(this.formulario.img)){
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

  getAnuncio(){
    this.anuncioService.getAnuncio(2).subscribe(
        resp=>{
          console.log(resp);
          this.formulario.titulo=resp.titulo;
          this.formulario.descripcion=resp.descripcion;
          this.formulario.img=resp.img;
          this.formulario.id=resp.id;
        },
        error=>{
          console.log(error);
        }
    )
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
      this.anuncio.id=this.formulario.id;
      this.anuncio.titulo=this.formulario.titulo;
      this.anuncio.descripcion=this.formulario.descripcion;
      this.anuncio.img=this.formulario.img;
      this.anuncioService.putAnuncio(this.anuncio).subscribe(
        resp=>{
          Swal.fire({
            title:'Anuncio editado con éxito',
            icon: 'success',
            confirmButtonText:'ok'
          }
        );
        },
        error=>{
          Swal.fire({
            title:'Algo ha salido mal...',
            icon: 'error',
            text:'Compruebe que el anuncio le pertenece y que los cambios son válidos',
            confirmButtonText:'ok'
          }
        );
        }
      )
      
    }

  }

}
