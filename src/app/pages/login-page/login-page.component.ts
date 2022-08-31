import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { GoogleSinginService } from 'src/app/google-singin.service';
import { Login } from './login';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: []
})
export class LoginPageComponent {

  login: Login = {email:'',password: ''}
  

  constructor(public gs:GoogleSinginService){

  }

  onSubmit({value,valid}: NgForm) {
   
  }
  resetForm(form: NgForm){
    form.resetForm();
  }
  signIn(){
    this.gs.signIn()
  }
}
