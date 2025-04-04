import { Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { Country } from '../../interfaces/country.interface';

import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';


@Component({
  selector: 'countries-table',
  templateUrl: './countries-table.component.html',
  styleUrl: './countries-table.component.css'
})
export class CountriesTableComponent implements OnChanges {

  @Input() public countryList: Country[] = [];
  @ViewChild(MatSort, { static: false }) sort!: MatSort;

  displayedColumns: string[] = ["Identificador","icon","capital", "img", "population","link"];
  dataSource = new MatTableDataSource<Country>();


  ngOnChanges(changes: SimpleChanges): void {
    if (changes['countryList']) {
      this.dataSource.data = this.countryList;

    }
  }
  ngAfterViewInit() {

    if (this.sort) {
      this.dataSource.sort = this.sort;
      // por defecto
      this.sort.active = 'population'; // Columna predeterminada
      this.sort.direction = 'asc';     // Dirección predeterminada

      // Aplica el orden
      this.sort.sortChange.emit();
  }
  }
}

