import { Component, OnInit, inject } from '@angular/core';
import { ServicioFamiliarService } from '../services/servicio-familiar.service';

@Component({
  selector: 'app-hermano',
  templateUrl: './hermano.component.html',
  styleUrls: ['./hermano.component.css']
})
export class HermanoComponent implements OnInit{
  
  nombre?:string;

  //constructor(private service: ServicioFamiliarService ){}

  constructor(){}

  private service = inject(ServicioFamiliarService)


  ngOnInit(): void {
    this.service.setHermano_pequeno('pedro martin');

    this.nombre = this.service.getHermano_pequeno();
  }

  saludar(){
    this.service.saludar(this.service.getHermano_grande())
  }

  preguntar(){
    console.log(this.service.preguntar_por_hijo());
    
  }

}
