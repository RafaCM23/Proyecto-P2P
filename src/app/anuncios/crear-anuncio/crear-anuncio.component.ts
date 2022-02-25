import { ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-crear-anuncio',
  templateUrl: './crear-anuncio.component.html',
  styleUrls: ['./crear-anuncio.component.css']
})
export class CrearAnuncioComponent implements OnInit {


  @ViewChild('miFormulario') miFormulario!: NgForm;
  

  formulario = {
    img:'',
    titulo:'',
    descripcion:''
  }


  constructor() { }

  ngOnInit(): void {
  }

  imgValida(): boolean {
    return this.miFormulario?.controls['img'].invalid 
            && this.miFormulario?.controls['img'].touched;
  }

  tituloValido(): boolean {
    return this.miFormulario?.controls['titulo'].invalid 
            && this.miFormulario?.controls['titulo'].touched;
  }
  descripcionValida(): boolean {
    return this.miFormulario?.controls['descripcion'].invalid 
            && this.miFormulario?.controls['descripcion'].touched;
  }



  guardar(){
    if(this.miFormulario.invalid){
      alert("errores")
    }
    else{
      alert("guardado");
    }

  }

}
