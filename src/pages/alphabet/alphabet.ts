import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LetterPage } from '../letter/letter';

/**
 * Generated class for the AlphabetPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-alphabet',
  templateUrl: 'alphabet.html',
})
export class AlphabetPage {
  index: number = 0;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AlphabetPage');
  }
  
  goToD(letter){
    this.navCtrl.push(LetterPage,{letter: letter});
  }

  DownList(){
    if(this.index<=26){ this.index+=1; }
  }

  UpList(){
    if(this.index>=1){ this.index-=1; }
  }

  Enter(){
    this.goToD(String.fromCharCode(65+this.index));
  }
}
