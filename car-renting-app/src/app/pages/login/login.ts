import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  loginObj : any = {
    username: '',
    password: ''
  };

  onLogin(){
    if(this.loginObj.username === 'prashant' && this.loginObj.password ==='12345'){
      alert('Login Successful');
    } else {
      alert('Invalid Credentials');
    }
  }

}
