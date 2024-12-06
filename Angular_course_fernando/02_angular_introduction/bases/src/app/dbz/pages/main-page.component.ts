import { Component } from "@angular/core";
import { Character } from "../interfaces/character.interface";
import { DbzService } from "../services/dbz.service";

@Component({
  selector:'app-dbz-main-page',
  templateUrl:'./main-page.component.html'
})
export class MainPageComponent{

  constructor(private DbzService:DbzService){}

get chracters():Character[]{
  return [...this.DbzService.charcaters]
}

onDeleteCharacter(id:string):void{

  this.DbzService.delCharacterById(id)

}

addCharacter(newCharacter:Character):void{

  this.DbzService.addNewCharacter(newCharacter)

}



}
