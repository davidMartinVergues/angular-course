import { Character } from '../../interfaces/character.interface';
import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'dbz-list',
    templateUrl: './list.component.html',
    styleUrl: './list.component.css'
})
export class ListComponent {

  @Output()
  public delCharacter: EventEmitter<string> = new EventEmitter();

  @Input()
  public characterList : Character[] = []

  delCharacter_(id?:string):void{

    if (!id) return;

    this.delCharacter.emit(id)

  }

 }
