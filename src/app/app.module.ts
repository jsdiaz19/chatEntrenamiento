import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { AlphabetPage } from '../pages/alphabet/alphabet';
import { SentencePage } from '../pages/sentence/sentence';
import { WordsPage } from '../pages/words/words';
import { InfoPage } from '../pages/info/info';

import { LetterPage } from '../pages/letter/letter';
import { NumberPage } from '../pages/number/number';
import { NumbersPage } from '../pages/numbers/numbers';
import { WordPage } from '../pages/word/word';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage} from '../pages/login/login';
import { LoginProvider } from '../providers/login/login';

import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { VibrationProvider } from '../providers/vibration/vibration';
import { Vibration } from '@ionic-native/vibration';

export const firebaseConfig = {
  apiKey: "AIzaSyCEN16Yevh_zCkq2nREpB7aJGgRA-tIQEE",
  authDomain: "tesis-69389.firebaseapp.com",
  databaseURL: "https://tesis-69389.firebaseio.com",
  projectId: "tesis-69389",
  storageBucket: "tesis-69389.appspot.com",
  messagingSenderId: "773915078479",
  appId: "1:773915078479:web:73520b0db6be5877"

};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AlphabetPage,
    SentencePage,
    WordsPage,
    InfoPage,
    LetterPage,
    NumberPage,
    NumbersPage,
    WordPage,
    LoginPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],  
  entryComponents: [
    MyApp,
    HomePage,
    AlphabetPage,
    SentencePage,
    WordsPage,
    InfoPage,
    LetterPage,
    NumberPage,
    NumbersPage,
    WordPage,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Vibration,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    LoginProvider,
    VibrationProvider
  ]
})
export class AppModule {}
