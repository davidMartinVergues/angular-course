import { Component, OnInit } from '@angular/core';
import { PrimeNgModule } from '../../../prime-ng/prime-ng.module';
import { ToggleCasePipe } from '../../pipes/toggle-case.pipe';
import { MenuItem } from 'primeng/api';
import { Toolbar } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { SplitButton } from 'primeng/splitbutton';
import { InputTextModule } from 'primeng/inputtext';
import { IconField } from 'primeng/iconfield';
import { InputIcon } from 'primeng/inputicon';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { Hero, Color } from '../../interfaces/hero.interface';
import { CanFlyPipe } from '../../pipes/can-fly.pipe';
import { SortByPipePipe } from '../../pipes/sort-by-pipe.pipe';

@Component({
  selector: 'products-order',
  standalone: true,
  imports: [SortByPipePipe,CanFlyPipe,TableModule, CommonModule,PrimeNgModule,ToggleCasePipe, Toolbar, ButtonModule, SplitButton, InputTextModule, IconField, InputIcon],
  templateUrl: './order.component.html',
  styleUrl: './order.component.css'
})
export class OrderComponent implements OnInit {

  public items: MenuItem[] | undefined;
  public isUpperCase: boolean = false;
  public sortBy : keyof Hero | null | undefined = null

  public heroes : Hero[] = [
    {
      name: 'superman',
      canFly: true,
      color: Color.blue
    },
    {
      name: 'Batman',
      canFly: false,
      color: Color.black
    },
    {
      name: 'Daredevil',
      canFly: true,
      color: Color.red
    },
    {
      name: 'Robin',
      canFly: false,
      color: Color.green
    },
  ]

  toggleUpperCase():void {

    this.isUpperCase = !this.isUpperCase

  }

  ngOnInit(): void {
    this.items = [
      {
        label: 'Update',
        icon: 'pi pi-refresh'
      },
      {
        label: 'Delete',
        icon: 'pi pi-times'
      }
    ];
  }

  changeOrder( value:keyof Hero ) {
    this.sortBy = value
  }
}
