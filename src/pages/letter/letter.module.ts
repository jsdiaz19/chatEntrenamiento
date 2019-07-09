import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LetterPage } from './letter';

@NgModule({
  declarations: [
    LetterPage,
  ],
  imports: [
    IonicPageModule.forChild(LetterPage),
  ],
})
export class LetterPageModule {}
