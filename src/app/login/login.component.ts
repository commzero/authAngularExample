import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  username:string;
  password:string;

  constructor(private authService: AuthService){}

  loginUser(){

    this.authService.login(this.username, this.password).subscribe(response =>{
      console.log('Login successful', response);
    }, error =>{
      console.error('login failed', error);
    });
    
  }

}

