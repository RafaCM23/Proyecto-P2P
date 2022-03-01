import { Component, OnInit } from '@angular/core';
import { anuncio } from 'src/app/anuncios/anuncio.interface';
import { AnunciosService } from 'src/app/anuncios/anuncios.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  anuncios:anuncio[]=[];
  constructor(private anunciosService: AnunciosService) { }

  ngOnInit(): void {
    
    this.imprimeAnuncios();

  }

  imprimeAnuncios(){
    this.anunciosService.getAnuncios().subscribe(
      resp =>{
        this.anuncios=resp;
        console.log(this.anuncios);
      },error =>{
        console.log(error);
      }
    )
    
  }
}
