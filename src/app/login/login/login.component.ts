import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/users/users.service';
import { catchError, map } from 'rxjs/operators';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string = "";
  password: string = "";

  constructor(private userService: UsersService, private router: Router) { }

  ngOnInit(): void {
  }

  login(){
    
    this.userService.compruebaLogin(this.email,this.password)
    .subscribe( resp => {
      this.userService.setToken(JSON.stringify(resp));
      this.router.navigateByUrl('');
    },error=>{Swal.fire({
      title:error.error.message,
      icon: 'error',
      confirmButtonText:'Ok'
    }
    );}
    )
    
    
  }
}
