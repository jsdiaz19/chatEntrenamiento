import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { resolve } from 'path';
import { rejects } from 'assert';
import { error } from 'util';


/*
  Generated class for the LoginProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

export interface User{
  uid: String;            // is user's uid 
  nombre: String;         // is user's name
  correo: String;         // is user's email
  discapacidad: String;   // is user's type disability
  password: String;       // is user's password
  tel: number;            // is user's phone
}
@Injectable()
export class LoginProvider {
  user: User;
  constructor(private afAuth :  AngularFireAuth, private afDB: AngularFireDatabase) {
    console.log('Hello LoginProvider Provider');
  }

  loginUser(email:string, password:string){
    return this.afAuth.auth.signInWithEmailAndPassword(email, password)
    .then(user=>{ Promise.resolve(user)})
    .catch(error=> Promise.reject(error))
  }
  

  getUser(){
    let receivedUser:any;
    return new Promise( (resolve)=>{
      this.afDB.object('usuarios/'+this.afAuth.auth.currentUser.uid+"/info/").valueChanges().subscribe(user=>{
        resolve(user);  
      });
    })
  }

  get Session(){
    return this.afAuth.authState;
  }
}
