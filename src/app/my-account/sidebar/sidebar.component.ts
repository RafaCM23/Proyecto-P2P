import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit{

  @Input () hora : String = '12:00';
  @Output () evento = new EventEmitter<string>();

  constructor(private router:Router) { }
  ruta:string='';


  ngOnInit(): void {
  this.cambio();
  }
  //Emite el evento con la ruta
  cambio(){
    this.ruta=this.router.url;
    this.evento.emit(this.ruta);
  }



 



  
}
