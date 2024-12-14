import {Component, EventEmitter, Input, input, Output} from '@angular/core';
import {MyFirstService} from "../services/my-first.service";

@Component({
  selector: 'app-message-detail',
  standalone: true,
  imports: [],
  templateUrl: './message-detail.component.html',
  styleUrl: './message-detail.component.scss'
})
export class MessageDetailComponent {


  @Input()
  message: any = {};

  @Input()
  index: number = -1;
  @Output()
  delete: EventEmitter<number> = new EventEmitter<number>();

  onDelete() {
    this.delete.emit(this.index);

  }
}
