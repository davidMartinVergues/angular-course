import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'canFly',
  standalone: true
})
export class CanFlyPipe implements PipeTransform {

  transform(canFly:boolean): 'vuela'|'no vuela' {
    return (canFly) ? 'vuela' : 'no vuela'
  }

}
