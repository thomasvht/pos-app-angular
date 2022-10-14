import { Component, OnInit } from '@angular/core';

const ELEMENT_DATA = [
  {description: 'Coca-cola', price: '1.00', volume: '0.20', volumeUnit: 'l'},
  {description: 'Jupiler', price: '1.50', volume: '0.25', volumeUnit: 'l'}
]

@Component({
  selector: 'app-product-overview',
  templateUrl: './product-overview.component.html',
  styleUrls: ['./product-overview.component.scss']
})
export class ProductOverviewComponent implements OnInit {

  displayedColumns: string[] = ['description', 'price', 'volume', 'edit', 'delete'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
