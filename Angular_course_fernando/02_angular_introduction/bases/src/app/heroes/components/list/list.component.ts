import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  public heroesList : string[] = ["Thor","Superman","SheHulk"]
  public deletedHeroe? : string;

  removeLastHeroes():void{
    this.deletedHeroe = this.heroesList.pop()
  }
}
