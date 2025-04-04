import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';

import { v4 as get_uuid } from 'uuid';


@Injectable({providedIn: 'root'})

export class DbzService {

  public charcaters : Character[] = [
    {id:get_uuid(),name:"krillin",power:500},
    {id:get_uuid(),name:"Goku",power:9500},
    {id:get_uuid(),name:"Vegeta",power:7500},
    {id:get_uuid(),name:"Kid Trunks",power:10},
  ]

  public addNewCharacter(character:Character):void{

    const newCharacter : Character = {...character,id:get_uuid()}

    this.charcaters.push(newCharacter)

  }

  public delCharacterById(id:string):void{

    this.charcaters = this.charcaters.filter(character => character.id !== id)

  }
  constructor() { }

}
