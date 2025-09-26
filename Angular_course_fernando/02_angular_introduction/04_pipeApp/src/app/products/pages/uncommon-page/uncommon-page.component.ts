import { Component } from '@angular/core';
import { PrimeNgModule } from '../../../prime-ng/prime-ng.module';
import { FieldsetModule } from 'primeng/fieldset';
import { interval, Observable, tap } from 'rxjs';
@Component({
  selector: 'app-uncommon-page',
  standalone: true,
  imports: [PrimeNgModule,FieldsetModule],
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css'
})
export class UncommonPageComponent {

  public name : string = 'David'
  public gender : 'male' | 'female' = 'male'

  public invitationMap = {
    'male':'invitarlo',
    'female':'invitarla'
  }

    changeClient() {

    this.name = 'Maria'
    this.gender = 'female'

  }

  //i18nPlural

  public clients : string[] = ['david', 'maria','laura','nuria']
  public clientMap : { [key: string]: string } = {
    '=0':'no tenemos ningun cliente esperando.',
    '=1':'tenemos un clinete esperando.',
    '=2':'tenemos 2 clinetes esperando.',
    'other':'tenemos # clinetes esperando.',
  }
  delClient() {
    this.clients.shift()
  }

  // keyValue Pipe

  public person = {
    "name":"David",
    "city":"Barcelona"
  }

  // async pipe => funcina con promesas y con observables

  public myObservableTime : Observable<number> = interval(1000).pipe(
    tap(value=>{
      console.log(value)
    })
    )

  public myPromiseValue: Promise<string> = new Promise (
    (resolve,reject) =>{
      setTimeout( ()=>{
        resolve('tenemos data en la promesa')

      },3500)
    }
  )

}
