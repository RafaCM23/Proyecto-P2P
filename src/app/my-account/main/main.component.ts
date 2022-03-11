import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {

  
  constructor(private router: Router) { }

  hora:string='';
  ngOnInit(): void {
    this.queHoraEs();
  }

  breadcrumb:string[]=[];
  rutaCompleta:string='';

  //Cuando cambia de ruta la procesa y recalcula la hora
  calculaRuta(ruta:string){
    this.rutaCompleta=ruta;
    this.breadcrumb=ruta.split("/");
     this.breadcrumb.shift();
     this.queHoraEs();
  }
  //Al hacer click en el breadcrumb vuelve a la ruta indicada
  vuelve(ruta:string){
    
    if(ruta!=this.breadcrumb[0]){
      this.router.navigateByUrl(this.rutaCompleta)
    }else{
      this.router.navigateByUrl(ruta);
    }

  }
  //Actualiza la hora
  queHoraEs(){
    var d = new Date();
    var hours = d.getHours();
    var minutes = d.getMinutes()
    if(minutes<10){this.hora=`${hours}:0${minutes}`}
   else{
    this.hora=(hours+":"+minutes)
   }
  }

}
