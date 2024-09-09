import { Component } from '@angular/core';
import { Output,EventEmitter,Input} from '@angular/core';

@Component({
  selector: 'app-outputs',
  templateUrl: './outputs.component.html',
  styleUrls: ['./outputs.component.css']
})
export class OutputsComponent {

  @Output() messageEvent = new EventEmitter<string>();
  @Input() mensaje_recibido_del_padre : string = '';


  message : string = '';

  sendMessage(){
    this.messageEvent.emit(this.message)
  }

}
