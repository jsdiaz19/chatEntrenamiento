import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SentencePage } from './sentence';

@NgModule({
  declarations: [
    SentencePage,
  ],
  imports: [
    IonicPageModule.forChild(SentencePage),
  ],
})
export class SentencePageModule {}
