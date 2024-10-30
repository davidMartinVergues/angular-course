import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicioFamiliarService {

  hermano_grande ?: string ;
  hermano_pequeno ?: string;

  getHermano_grande():string{
    return this.hermano_grande || ''
  }

  getHermano_pequeno():string{
    return this.hermano_pequeno || ''
  }

  setHermano_grande(nombre_hermano_grande : string) :void{
    this.hermano_grande = nombre_hermano_grande;
  }

  setHermano_pequeno(nombre_hermano_pequeno : string):void{
    this.hermano_pequeno = nombre_hermano_pequeno;
  }

  saludar(nombre: string){
    console.log(`Hola ${nombre}`)
  }

  preguntar_por_hijo():string{
    return 'cómo esta tu hijo?'
  }

  constructor() { }
}
