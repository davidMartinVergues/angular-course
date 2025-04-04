import { Component } from '@angular/core';
import { PrimeNgModule } from '../../../prime-ng/prime-ng.module';

@Component({
  selector: 'app-basics-page',
  standalone: true,
  imports: [PrimeNgModule],
  templateUrl: './basics-page.component.html',
  styleUrl: './basics-page.component.css'
})
export class BasicsPageComponent {

  public nameLower : string = "david";
  public nameUpper : string = "DAVID";
  public fullName : string = "DaVid MaRtIN";

  public customDate : Date = new Date() ;

}
