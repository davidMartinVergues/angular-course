import { cacheStore } from './../interfaces/cache-store.interface';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, delay, map, Observable, of, tap } from 'rxjs';
import { Country } from '../interfaces/country.interface';
import { Region } from '../interfaces/region.type';

@Injectable({providedIn: 'root'})
export class CountryService {

  private api_url:string = 'https://restcountries.com/v3.1'

  public cacheStore : cacheStore = {
    byCapital : { term:'', countries : []},
    byCountries : { term:'', countries : []},
    byRegion : { region:'', countries : []},
  }

  constructor(private httpClient: HttpClient) {
    this.loadToLocalStorage()
   }

  private saveToLocalStorage(){

    localStorage.setItem('cacheStore',JSON.stringify(this.cacheStore))

  }
  private loadToLocalStorage(){

    if(!localStorage.getItem('cacheStore')) return
    this.cacheStore = JSON.parse(localStorage.getItem('cacheStore')!)
  }

  private geCountriesRequest(url:string):Observable<Country[]>{

    return this.httpClient.get<Country[]>(url)
    .pipe(
      catchError( error => of([])),

    )

  }


  serachCountryByALphaCode(code:string):Observable<Country | null>{

    return this.httpClient.get<Country[]>(`${this.api_url}/alpha/${code}`)
      .pipe(
        map(countries=> countries.length>0 ? countries[0] : null),
        catchError( error => {
          return of(null)
        })
      )

  }
  serachCapital(term:string):Observable<Country[]>{

    const url = `${this.api_url}/capital/${term}`
    return this.geCountriesRequest(url)
                .pipe(
                  tap( countries => this.cacheStore.byCapital = { term, countries}  ),
                  tap(() => this.saveToLocalStorage()),

                )

  }

  serachCountry(term:string):Observable<Country[]>{

    const url = `${this.api_url}/name/${term}`

    return this.geCountriesRequest(url)
                .pipe(
                  tap( countries => this.cacheStore.byCountries = { term, countries}  ),
                  tap(() => this.saveToLocalStorage()),
                )

  }

  serachRegion(region:Region):Observable<Country[]>{

    const url =`${this.api_url}/region/${region}`

    return this.geCountriesRequest(url)
    .pipe(
      tap( countries => this.cacheStore.byRegion = { region, countries}  ),
      tap(() => this.saveToLocalStorage()),
    )

  }

}
