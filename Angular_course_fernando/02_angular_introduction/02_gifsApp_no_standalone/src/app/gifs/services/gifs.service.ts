import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchResponse } from '../interfaces/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  public gifsList : Gif[] = []

  private _tagHistory : string[] = [];
  private apiKey:string = '7YitphM5aG6m5aTR5MP3ULSlBMmFHpQF'
  private urlGifs:string = 'https://api.giphy.com/v1/gifs/'

  constructor(private httpClient:HttpClient) {
    this.loadLocalStorage()
  }

  get tagHistory():string[]{

    return [...this._tagHistory] //pasamos una copia del array

  }

  private saveLocalStorage():void{
    localStorage.setItem('history',JSON.stringify(this._tagHistory))
  }

  private loadLocalStorage():void{

    if(!localStorage.getItem('history')) return

    this._tagHistory =  JSON.parse(localStorage.getItem('history')! )

    if(this._tagHistory.length===0) return

    this.searchTag(this._tagHistory[0])



  }

  private organizeHistory(tag:string){
    tag = tag.toLowerCase()

    if(this._tagHistory.includes(tag)){

      this._tagHistory = this._tagHistory.filter( item => item!== tag)

    }

    this._tagHistory.unshift(tag)

    this._tagHistory = this._tagHistory.splice(0,10)
    this.saveLocalStorage()


  }

  searchTag(tag:string):void{

    if(tag.length==0) return;

    // unshift inserta nuevo elemento al principio del array
    this.organizeHistory(tag)

    const params = new HttpParams()
      .set('api_key',this.apiKey)
      .set('q',tag)
      .set('limit',10)

    this.httpClient.get<SearchResponse>(`${this.urlGifs}search`,{ params })
    .subscribe(res=>this.gifsList = res.data
    )
  }

}
