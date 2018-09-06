import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AppComponent } from './app.component';
import { ChatComponent } from './chat/chat.component';

import { AngularFireAuth } from 'angularfire2/auth';
import { auth } from 'firebase/app';
import { MessageComponent } from './message/message.component';
import { InputComponent } from './input/input.component';

const config = {
  apiKey: "AIzaSyCwU1CPuCb-zD2B7hEkD-svKw4QqP-zL50",
  authDomain: "getting-real-firebase.firebaseapp.com",
  databaseURL: "https://getting-real-firebase.firebaseio.com",
  projectId: "getting-real-firebase",
  storageBucket: "getting-real-firebase.appspot.com",
  messagingSenderId: "775498235924"

};

@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    MessageComponent,
    InputComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(config),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { 
  
}
