import { Component, EventEmitter, Output } from '@angular/core';
import { GifsService } from '../../services/gifs.service';
import { Gif } from '../../interfaces/gifs.interface';

@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomepageComponent {


  constructor(private _gifsservice: GifsService){}


  get gifs():Gif[]{

    return this._gifsservice.gifsList
  }


}
