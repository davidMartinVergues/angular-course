import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Injectable({providedIn: 'root'})

export class DbzService {

  public charcaters : Character[] = [
    {name:"krillin",power:500},
    {name:"Goku",power:9500},
    {name:"Vegeta",power:7500},
    {name:"Kid Trunks",power:10},
  ]

  public addNewCharacter(character:Character):void{

    this.charcaters.push(character)

  }

  public delOneCharacter(idx:number):void{

    this.charcaters.splice(idx,1)

  }
  constructor() { }

}
