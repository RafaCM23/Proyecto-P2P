import { Component, OnDestroy, OnInit } from '@angular/core';
import { anuncio } from 'src/app/anuncios/anuncio.interface';
import { AnunciosService } from 'src/app/anuncios/anuncios.service';
import Swal from 'sweetalert2';
import { MyAccountService } from '../my-account.service';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-mis-anuncios',
  templateUrl: './mis-anuncios.component.html',
  styleUrls: ['./mis-anuncios.component.css']
})
export class MisAnunciosComponent implements OnInit,OnDestroy {

  misAnuncios:anuncio[]=[];
  dtOptions: DataTables.Settings = {};
  dtTrigger:Subject<any> = new Subject<any>();

  constructor(private servicio: MyAccountService, private anuncioService:AnunciosService) { }

  
  ngOnInit(): void {
    this.imprimeAnuncios();
  }

  ngOnDestroy(): void{
    this.dtTrigger.unsubscribe();
  }
  imprimeAnuncios():any{
    this.servicio.getAnuncios().subscribe(
      {
        next:resp=>{
          
          this.misAnuncios=resp;
          this.dtTrigger.next(this.misAnuncios);
        },
        error:error=>{
          Swal.fire({
            title:'No se han podido recuperar anuncios',
            icon: 'error',
            confirmButtonText:'ok'
          }
        );
        }
      }
    )
  }
  
  borrarAnuncio(id:number){
    Swal
    .fire({
        title: "Anuncio:"+id,
        text: "¿Está seguro que desea eliminar este anuncio?",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: "Sí, eliminar",
        cancelButtonText: "Cancelar",
    })
    .then(resultado => {
        if (resultado.value) {
            //Dice que si
            this.anuncioService.deleteAnuncio(id).subscribe(
              resp=>{
                window.location.reload();
              },error=>{
                Swal.fire({
                  title:'Algo ha salido mal...',
                  icon: 'error',
                  text:'Ha habido un error al borrar su anuncio',
                  confirmButtonText:'ok'
                }
              );
              }
            );
        } 
    });
  }

}
