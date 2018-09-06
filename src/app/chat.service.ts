import { Injectable } from '@angular/core';
import { Message } from "./message.model";
import { AngularFirestore, AngularFirestoreCollection } from "angularfire2/firestore";

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(private db: AngularFirestore) {
    this.messages = db.collection<Message>("messages");
  }

  messages: AngularFirestoreCollection<Message>;

  addMsg(msg) {
    this.messages.add(msg);
  }

}
