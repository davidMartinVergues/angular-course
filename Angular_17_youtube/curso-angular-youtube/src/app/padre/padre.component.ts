import { Component, OnInit } from '@angular/core';
import { ServicioFamiliarService } from '../services/servicio-familiar.service';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent implements OnInit{
  
  nombre?:string;
  fecha:Date= new Date();

  constructor(private service: ServicioFamiliarService){}

  ngOnInit():void{
    this.service.setHermano_grande('juan vergues');
    this.nombre = this.service.getHermano_grande();
  }

  saludar(){
    this.service.saludar(this.service.getHermano_pequeno())
  }

  preguntar(){
    console.log(this.service.preguntar_por_hijo());
    
  }



}
