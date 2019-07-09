import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AlphabetPage } from './alphabet';

@NgModule({
  declarations: [
    AlphabetPage,
  ],
  imports: [
    IonicPageModule.forChild(AlphabetPage),
  ],
})
export class AlphabetPageModule {}
