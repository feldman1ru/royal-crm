import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private auth: Auth, private router: Router) { }

  sinupWithEmailAndPassword(user: Singup,cb :Function){

    const {email, password} = user;
    createUserWithEmailAndPassword(this.auth, email, password)
    .then((credentials)=>{

      cb(credentials)
      console.log('user sing up with email & password successguly!');
      

    }).catch(()=>cb(null))
  }

  logout(){
    signOut(this.auth)
    .then(()=> {console.log('user log out');
    })
    .catch((error)=> console.log(error));
  }

  loginWithEmailAndPassword(user: Login,cb : Function){

    const {email, password} = user;

    signInWithEmailAndPassword(this.auth,email,password)
    .then((credentials) => {
      cb(credentials);
    })
    .catch(()=>cb(null));
  }

  signupAndloginWithGoogle(cb: Function){

    const provider = new GoogleAuthProvider()
    signInWithPopup(this.auth, provider)
    .then((data)=>{console.log('log successfull with google');
    cb(data);

    })
    .catch(() => cb(null));
  }

  getUserStatus(cb:Function){
    return onAuthStateChanged(this.auth, (user) => cb(user))

  }
}

interface Singup {
  email: string;
  password: string;
}

interface Login{
  email: string;
  password: string;
}
