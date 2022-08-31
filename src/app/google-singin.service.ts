import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GoogleSinginService {

  private auth2!: gapi.auth2.GoogleAuth
  private subject = new ReplaySubject<gapi.auth2.GoogleUser>(1)
   

  constructor() {
  
    gapi.load('auth2', () =>{
      this.auth2 = gapi.auth2.init({
        client_id:'719524296361-8pefkjob41crcg4afhneik7st9be0bap.apps.googleusercontent.com'
      })
    })
  }

  public signIn() {
    this.auth2.signIn({
      // 
      scope: 'https://www.googleapis.com/auth/gmail.readonly'
    }).then( user =>{
      console.log(user)
      this.subject.next(user)
    }).catch(() =>{
      this.subject.next()
    })
  }

  public signOut() {
    this.auth2.signOut()
      .then(()=>{
        this.subject.next()
      })
  }

  public observable() : Observable<gapi.auth2.GoogleUser>{
    return this.subject.asObservable();
  }
}
