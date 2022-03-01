import { Component, OnInit } from '@angular/core';
import { anuncio } from 'src/app/anuncios/anuncio.interface';
import { MyAccountService } from '../my-account.service';

@Component({
  selector: 'app-mis-anuncios',
  templateUrl: './mis-anuncios.component.html',
  styleUrls: ['./mis-anuncios.component.css']
})
export class MisAnunciosComponent implements OnInit {

  constructor(private servicio: MyAccountService) { }

  misAnuncios:anuncio[]=[];
  ngOnInit(): void {
    this.imprimeAnuncios();
  }

  imprimeAnuncios(){//cambiar esto para que sea personal
    this.servicio.getAnuncios(1).subscribe(
      resp=>{
        this.misAnuncios=resp;
      },
      error=>{
        console.log(error.message);
      }
    )
  }

}
