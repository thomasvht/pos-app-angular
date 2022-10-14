import { FirebaseService } from './../../shared/firebase.service';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/entities/product';

@Component({
  selector: 'app-product-overview',
  templateUrl: './product-overview.component.html',
  styleUrls: ['./product-overview.component.scss']
})
export class ProductOverviewComponent implements OnInit {
  displayedColumns: string[] = ['description', 'price', 'volume', 'edit', 'delete'];
  dataSource: Array<Product> = [];

  constructor(private firebaseService: FirebaseService) {
  }

  ngOnInit(): void {
    this.firebaseService.getProducts()
    .then((response) => {
      this.dataSource = response;
    })
  }

}
