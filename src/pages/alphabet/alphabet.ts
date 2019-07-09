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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AlphabetPage');
  }
  
  goToD(letter){
    this.navCtrl.push(LetterPage,{letter: letter});
  }

}
