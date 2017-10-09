import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs';

@Injectable()
export class AuthService {

  constructor(public afAuth: AngularFireAuth) { }
  //login is created which will create email and password 
  login(email:string,password:string){
    return new Promise((resolve, reject) => {
      this.afAuth.auth.signInWithEmailAndPassword(email,password)
      .then(userData => resolve(userData),
        err => reject(err));
    })
  }

  //checking user status weather it is logged in or not
  getAuth(){
    return this.afAuth.authState.map(auth => auth);
  }
  //logout user
  logout(){
    this.afAuth.auth.signOut();
  }
  //register service
  register(email:string, password:string) {
    return new Promise((resolve, reject) => {
      this.afAuth.auth.createUserWithEmailAndPassword(email,password)
      .then(userData => resolve(userData),err => reject(err));
    });
  }
}
