import { Component, Input, OnInit } from '@angular/core';
import { MenuItem,PrimeIcons } from 'primeng/api';
import { PrimeNgModule } from '../../../prime-ng/prime-ng.module';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router'

@Component({
  selector: 'shared-menu',
  standalone: true,
  imports: [PrimeNgModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent implements OnInit{

  public items:MenuItem[]=[];

  ngOnInit(): void {
    this.items = [
      {
          label: 'Pipes de Angular',
          icon: PrimeIcons.DESKTOP,
          items:[
            {
              label:"Textos y fechas",
              icon:PrimeIcons.ALIGN_LEFT
            },
            {
              label:"Numeros",
              icon:PrimeIcons.DOLLAR,
              routerLink:'numbers'
            },
            {
              label:"No comunes",
              icon:PrimeIcons.GLOBE,
              routerLink:'uncommon'
            },
          ]
      },
      {
          label: 'Pipes personalizados',
          icon: PrimeIcons.COG,
          items:[
            {
              label:"Otros elementos",
              icon:PrimeIcons.ANDROID
            }
          ]
      }
  ];
  }




}
