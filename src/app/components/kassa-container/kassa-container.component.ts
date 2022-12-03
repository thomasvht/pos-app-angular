import { FirebaseService } from './../../shared/firebase.service';
import { Component } from '@angular/core';
import { Product } from 'src/app/entities/product';

@Component({
  selector: 'app-kassa-container',
  templateUrl: './kassa-container.component.html',
  styleUrls: ['./kassa-container.component.scss']
})
export class KassaContainerComponent {
  products: Array<Product> = [];

  constructor(private firebaseService: FirebaseService) {
    this.firebaseService.getProducts()
    .then(response => this.products = response);
  }

  public addProductToTab(product: Product) {
      console.log("Product: ", product);
  }

}
