import { Character } from './../../interfaces/character.interface';
import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'dbz-list',
    templateUrl: './list.component.html',
    styleUrl: './list.component.css'
})
export class ListComponent {

  @Output()
  public delCharacter: EventEmitter<number> = new EventEmitter();

  @Input()
  public characterList : Character[] = [
    {name:"Trunk", power:10}
  ]

  delCharacter_(idx:number):void{

    this.delCharacter.emit(idx)

  }

 }
