import { Component} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';



@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: []
})
export class LoginPageComponent {
  error: boolean = false;
  counter: number = 0;
  threeFailedAttemptsToLogin: boolean = false;

  constructor(private US: UserService, private router: Router){}
  
  onSubmit(form: NgForm) {

    const { value, valid } = form;
    if(valid){
      this.US.loginWithEmailAndPassword(value, (user: any): any => {

        if(user){
          form.resetForm()
          return this.router.navigate(['/customers']);
        }

          this.error = true;

          setTimeout(()=>{
            this.error = false;
            form.resetForm();
            this.counter++;
            console.log(this.counter);
          },4000);

          if (this.counter === 2) {
            this.threeFailedAttemptsToLogin = true;
  
            setTimeout(() => {
              this.counter = 0;
              this.threeFailedAttemptsToLogin = false;
            }, 60_000);
          }

        })
    }
  
  }
  loginWithGoogle() {
    this.US.signupAndloginWithGoogle((user: any): any=>{
      if(user) return this.router.navigate(['/customers']);

    });
  }

  resetForm(form: NgForm) {
    form.resetForm();
  }

  ngOnInit() {
    this.US.getUserStatus((user: any) => {
      if (user) this.router.navigate(['/customers']);
    });
  }
}
