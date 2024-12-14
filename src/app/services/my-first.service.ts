import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyFirstService {

  constructor() {
  }
  messages: Array<any> = [];

  insert(message: {
    name: String, message: String, email: String
  }) {
    this.messages.push(message);
  }


  getAllMessages() {
    return this.messages;
  }

  deleteMessage(index: number) {
    this.messages.splice(index, 1);
  }

}
