import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { GifsService } from '../../services/gifs.service';


@Component({
  selector: 'search-box',
  templateUrl: './search-box.component.html',
  styleUrl: './search-box.component.css'
})
export class SearchBoxComponent {



  @ViewChild('txtInput')
  public tagInput!: ElementRef<HTMLInputElement>;

  constructor(private _gifsService:GifsService){}

  searchTag(){
    const newTag = this.tagInput.nativeElement.value;

    this._gifsService.searchTag(newTag)

    this.tagInput.nativeElement.value=""



  }

}
