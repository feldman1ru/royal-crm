import { ChangeDetectorRef, Component } from '@angular/core';
import { GoogleSinginService } from '../google-singin.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'royal-crm';

  user!: gapi.auth2.GoogleUser;

  constructor(private signInServise: GoogleSinginService, private ref : ChangeDetectorRef){

  }

  ngOnInit():void {
    this.signInServise.observable().subscribe( user => {
      this.user = user
      this.ref.detectChanges()
    })
  }

  signIn (){
    this.signInServise.signIn()
  }

  sighOut (){
    this.signInServise.signOut()
  }
}
