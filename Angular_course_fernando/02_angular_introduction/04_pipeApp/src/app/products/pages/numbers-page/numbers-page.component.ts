import { Component } from '@angular/core';
import { PrimeNgModule } from '../../../prime-ng/prime-ng.module';

@Component({
  selector: 'app-numbers-page',
  standalone: true,
  imports: [PrimeNgModule],
  templateUrl: './numbers-page.component.html',
  styleUrl: './numbers-page.component.css'
})
export class NumbersPageComponent {

  public nameLower : string = 'David'
  public totalSells : number = 2567789.5567
  public percent : number = 0.4586

}
