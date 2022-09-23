import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, of } from 'rxjs';
import { UserService } from '../pages/Users/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  isLogged: Observable<boolean> = of(false);
  // isLogged: boolean = false;
  
  constructor( private US: UserService, private router: Router){}
  // canActivate(
  //   route: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot) {
  //     this.US.getUserStatus((user: any)=>{
  //       if(user){
  //         this.isLogged = true;
  //         return
  //       }
  //       return this.router.navigate([''])
  //     });

  //   return this.isLogged;
  // }
  
 
   
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
      this.US.getUserStatus((user: any) => {
        user ? (this.isLogged = user) : this.router.navigate(['']);
      });
      if (this.isLogged) return true;
      return false;
    
}
}