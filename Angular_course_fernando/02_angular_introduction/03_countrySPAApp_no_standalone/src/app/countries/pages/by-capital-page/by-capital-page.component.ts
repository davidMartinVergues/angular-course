import { Component, OnInit, ViewChild } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styleUrl: './by-capital-page.component.css'
})
export class ByCapitalPageComponent implements OnInit{

  constructor(private _countryService:CountryService){}

  public countryList:Country[] = [];
  public isLoading:boolean=false;
  public initialvalue:string='';

  ngOnInit(): void {

    this.countryList = this._countryService.cacheStore.byCapital.countries
    this.initialvalue = this._countryService.cacheStore.byCapital.term

  }

  onInputValue(capital:string){
    this.isLoading=true

    this._countryService.serachCapital(capital)
    .subscribe( data => {
      this.countryList = data
      this.isLoading =false
    }
  )

  }


}
