import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Login } from './login';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: []
})
export class LoginPageComponent {

  login: Login = {email:'',password: ''}
  onSubmit({value,valid}: NgForm) {
    console.log(value);
    console.log(valid);
    
    
  }
  resetForm(form: NgForm){
    form.resetForm();
  }

}
