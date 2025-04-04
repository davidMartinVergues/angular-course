import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';
import { CommonModule } from '@angular/common';
import { Region } from '../../interfaces/region.type';


@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styleUrl: './by-region-page.component.css'
})
export class ByRegionPageComponent implements OnInit  {

  public countryList: Country[] = []
  public regions:Region[] = ["Americas","Africa","Europe","Oceania","Asia", '']
  public selectedRegion?:Region;

  constructor(private _countriesService: CountryService){}
  ngOnInit(): void {

    this.selectedRegion = this._countriesService.cacheStore.byRegion.region != '' ?  this._countriesService.cacheStore.byRegion.region  : undefined

    this.countryList = this._countriesService.cacheStore.byRegion.countries
  }

  onInputValue(region:Region){

    this.selectedRegion = region

    this._countriesService.serachRegion(region)
      .subscribe(data => this.countryList = data)
  }

}
