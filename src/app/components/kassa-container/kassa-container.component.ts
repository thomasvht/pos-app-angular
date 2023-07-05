import { FirebaseService } from './../../shared/firebase.service';
import { Component } from '@angular/core';
import { Product } from 'src/app/entities/product';
import { arrayRemove } from 'firebase/firestore';

@Component({
  selector: 'app-kassa-container',
  templateUrl: './kassa-container.component.html',
  styleUrls: ['./kassa-container.component.scss']
})
export class KassaContainerComponent {
  products: Array<Product> = [];
  totaal: Array<Product>= [];
  
  

  constructor(private firebaseService: FirebaseService) {
    this.firebaseService.getProducts()
    .then(response => this.products = response);
  }

  public addProductToTab(product: Product) {
      console.log("Product: ", product);
      this.totaal.push(product);
      console.log(this.totaal);
      console.log(this.products);
      this.addProductToList();
  }
  public addProductToList() {
    console.log("check de list")

  }
  public DeleteProductFromList(product: Product){
    console.log(product)
     const indexOfProd = this.totaal.indexOf(product,0)
     console.log(indexOfProd);
     this.totaal.splice(indexOfProd,1);



  }

}



