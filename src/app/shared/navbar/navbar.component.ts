import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private authService: AuthService,private router:Router) { }

  ngOnInit(): void {
    this.estaRegistrado();
  }

  logout(){
    this.authService.delToken();
    this.router.navigate(['/'])
  .then(() => {
    window.location.reload();
  });
    
  }

  estaRegistrado(){
    return this.authService.compruebaToken();

  }
}
