import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import Swal from 'sweetalert2';
import { anuncio, comentario } from '../anuncio.interface';
import { AnunciosService } from '../anuncios.service';

@Component({
  selector: 'app-ver-anuncio',
  templateUrl: './ver-anuncio.component.html',
  styleUrls: ['./ver-anuncio.component.css']
})
export class VerAnuncioComponent implements OnInit {

  constructor(private anuncioService:AnunciosService,private route: ActivatedRoute, private authService:AuthService) { }

  nuevoComentario:string='';
  id:number=0;
  autor:String='';
  anuncio:anuncio={
    id:0,
    img:'',
    titulo:'',
    descripcion:'',
    comentarios: [],
  }

  
  ngOnInit(): void {
    this.recogeId();
    this.getAnuncio();
    this.whois();
    
  }

  whois(){
    this.anuncioService.whoOwns(this.id).subscribe({
      next:resp=>{
        this.autor= resp.email;
        console.log(this.autor)
      }
      ,error:error=>{
        this.autor='';
      }
    });
  }
  recogeId(){
    this.route.params.subscribe(params=>{
      this.id=params['id'];
    })

  }

  registrado(){
    if(this.authService.compruebaToken()) {
      return true;
    }
    return false;
  }
  getAnuncio(){
    this.anuncioService.getAnuncio(this.id).subscribe({
        next:resp=>{

          this.anuncio.titulo=resp.titulo;
          this.anuncio.descripcion=resp.descripcion;
          this.anuncio.img=resp.img;
          this.anuncio.id=resp.id;
          this.anuncio.comentarios=resp.comentarios
        },
        error:error=>{
          Swal.fire({
            title:'Error al cargar el anuncio',
            icon: 'error',
            confirmButtonText:'ok'
          }
        );
        }
      })
      }

    enviarComentario(){
      if(this.nuevoComentario.length<5){
        Swal.fire({
          title:'Comentario muy corto',
          text:'Debe tener al menos 5 caracteres',
          icon: 'error',
          confirmButtonText:'ok'
        }
      );
      }

      else{
        const comentario:comentario={
        contenido:this.nuevoComentario
        }
        this.anuncioService.guardaComentario(this.anuncio.id,comentario).subscribe({
          next:resp=>{
            Swal
              .fire({
                  title: "Comentario publicado con éxito",
                  icon: 'success',
                  confirmButtonText: "ok"
              })
              .then(resultado => {
                  if (resultado.value) {
                      window.location.reload();
                  } 
              });
          },
          error:error=>{
            console.log(error);
          }
        })
      }
    }
    cortaFecha(cadena:Date){
      var fecha=cadena.toString();
      return fecha.substring(0,10);
    }
}
