import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

 authStatus:boolean;
  constructor(private authService :AuthService, private router:Router) {

   }

  ngOnInit(): void {
    this.authStatus= this.authService.isAuth;
  }
  onSignIn(){
    this.authService.singIn().then(
      ()=>{
        console.log('Sing in Successful');
        this.authStatus=this.authService.isAuth;
        this.router.navigate(['appareils'])
      }
    );
  }
  onSingOut(){
    this.authService.signOut();
    this.authStatus= this.authService.isAuth;
  }


}


