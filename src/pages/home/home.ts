import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { AlphabetPage } from '../alphabet/alphabet';
import { SentencePage } from '../sentence/sentence';
import { WordsPage } from '../words/words';
import { InfoPage } from '../info/info';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  
  
  goToInfo(){
    this.navCtrl.push(InfoPage);
  }
  
  goToAlphabet(){
    this.navCtrl.push(AlphabetPage);
  }
  
  goToNumbers(){
    this.navCtrl.push(SentencePage);
  }
  
  goToWords(){
    this.navCtrl.push(WordsPage);
  }
  
  goToSentence(){
    this.navCtrl.push(SentencePage);
  }
  
}



