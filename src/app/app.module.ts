import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import {HttpModule} from "@angular/http";
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {AngularFireModule} from 'angularfire2';
import { FirebaseProvider } from './../providers/firebase/firebase';

const config = {
  apiKey: 'AIzaSyDxGu6g_Wti9oetnXv44sS5oGduYPP1Fic',
  authDomain: 'near-me-72c7f.firebaseapp.com',
  databaseURL: 'https://near-me-72c7f.firebaseio.com/',
  projectId: 'near-me-72c7f',
  storageBucket: 'gs://near-me-72c7f.appspot.com',
  messagingSenderId: '456684491874'
};

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(config),
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FirebaseProvider
  ]
})
export class AppModule {}
