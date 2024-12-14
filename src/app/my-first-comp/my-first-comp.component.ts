import {Component, inject} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {NgForOf, NgIf} from "@angular/common";
import {MessageDetailComponent} from "../message-detail/message-detail.component";
import {MyFirstService} from "../services/my-first.service";

@Component({
  selector: 'app-my-first-comp',
  standalone: true,
  imports: [
    FormsModule,
    NgIf,
    NgForOf,
    MessageDetailComponent,
  ],
  templateUrl: './my-first-comp.component.html',
  styleUrl: './my-first-comp.component.scss'
})
export class MyFirstCompComponent {
  name: String = '';
  email: String = '';
  message: String = '';
  isSubmitted = false;
  messages: Array<any> = [];


  constructor(
    private service:MyFirstService
  ) {
    this.messages=this.service.messages
  }

  onSubmit() {
    this.isSubmitted = true
    this.service.insert({
      'name': this.name,
      'message': this.message,
      'email': this.email
    })
    console.log(this.messages);
  }

  deleteMessage(index: number) {
    this.service.deleteMessage(index)
    console.log(this.messages)
  }
}
