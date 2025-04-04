import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styleUrl: './by-country-page.component.css'
})
export class ByCountryPageComponent implements OnInit {

  public countryList:Country[] = []
  public initialvalue:string='';


  constructor(private _countriesService : CountryService){}


  ngOnInit(): void {

    this.countryList = this._countriesService.cacheStore.byCountries.countries
    this.initialvalue = this._countriesService.cacheStore.byCountries.term
  }

  onDataInput(country:string){

    this._countriesService.serachCountry(country)
      .subscribe(data=> this.countryList = data)

  }

}
