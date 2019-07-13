import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import {FormGroup, Validators,FormControl } from '@angular/forms';
import {LoginProvider} from '../../providers/login/login'
import {HomePage} from '../home/home'
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare var window: any;

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  
  Form= new FormGroup({
    user: new FormControl('',Validators.required),
    password: new FormControl('',Validators.required)
  });

  constructor(public navCtrl: NavController, public navParams: NavParams,private platform: Platform, private auth: LoginProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  ShowToast(message){
    this.platform.ready().then(()=>{
      window.plugins.toast.show(message,"short","bottom")
    })
  }

  login(){
    if(!this.Form.invalid){
      this.auth.loginUser(this.Form.controls['user'].value,this.Form.controls['password'].value)
        .then(user=>{
          this.auth.getUser().then(res=>{
            this.navCtrl.push(HomePage,{name: res.nombre, disp: res.discapacidad});
          })
        })
        .catch( err=>{
          //this.ShowToast('Usuario no registrado');
          console.log(err);
        })
    }
    else{
      //this.ShowToast('Usuario no registrado');
      console.log("usuario no registrado");

    }
      
  }



}
