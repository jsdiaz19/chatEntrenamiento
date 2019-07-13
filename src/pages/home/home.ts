import { Component } from '@angular/core';
import { NavController, NavParams} from 'ionic-angular';

import { AlphabetPage } from '../alphabet/alphabet';
import { SentencePage } from '../sentence/sentence';
import { WordsPage } from '../words/words';
import { InfoPage } from '../info/info';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  name: String;
  discapacidad: String;
  index: number = 0;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.name= navParams.get('name');
    this.discapacidad = navParams.get('disp');
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
  
  Enter(){
    switch(this.index){
      case 0:
        console.log('entro');
        this.goToInfo();
        break;
      
      case 1:
        this.goToAlphabet();
        break;

      case 2:
        this.goToWords();
        break;

      default:
        this.goToSentence();
    }
  }

  UpList(){
    if(this.index>=1){ this.index-=1; }
  }

  DownList(){
    if(this.index<=2){ this.index+=1; }
  }
}



