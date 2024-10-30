import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-outputs-padre',
  templateUrl: './outputs-padre.component.html',
  styleUrls: ['./outputs-padre.component.css']
})
export class OutputsPadreComponent {

  mensaje_del_padre: string = 'mensaje q envio desde el padre al hijo';

  receivedMEssage : string = '';

  receiveMessage(message:string){
    this.receivedMEssage = message
  }

}
