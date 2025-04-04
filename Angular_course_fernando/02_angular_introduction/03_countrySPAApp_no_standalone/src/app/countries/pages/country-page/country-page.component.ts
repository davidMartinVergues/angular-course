import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CountryService } from '../../services/country.service';
import { switchMap, tap } from 'rxjs';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
  styleUrl: './country-page.component.css'
})
export class CountryPageComponent implements OnInit{

  public country?:Country;

  constructor(
    private activatedRoute:ActivatedRoute,
    private countriesService: CountryService,
    private router: Router,
  ){}

  ngOnInit(): void {

    this.activatedRoute.params
    .pipe(
      switchMap( params => this.countriesService.serachCountryByALphaCode(params['id']))
    )
    .subscribe({
      next:(country)=>{
        if(!country) this.router.navigateByUrl('')
        console.log('entra al next',country)

        return this.country = country!;
      }
    })


  }
}
