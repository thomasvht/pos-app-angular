import { FormGroup } from '@angular/forms';
import { FirebaseService } from './../../shared/firebase.service';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/entities/product';
import { AddProductComponent } from '../add-product/add-product.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-product-overview',
  templateUrl: './product-overview.component.html',
  styleUrls: ['./product-overview.component.scss']
})
export class ProductOverviewComponent implements OnInit {
  displayedColumns: string[] = ['description', 'price', 'volume', 'edit', 'delete'];
  dataSource: Array<Product> = [];

  constructor(private firebaseService: FirebaseService, private dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.firebaseService.getProducts()
    .then((response) => {
      this.dataSource = response;
    })
  }

  editProduct(id: string) {
    const product = this.firebaseService.getProductById(id);
    const dialogRef = this.dialog.open(AddProductComponent, {
      height: '540px',
      width: '800px',
      data: product
    });

    dialogRef
    .afterClosed()
    .subscribe((result: FormGroup) => {
      this.firebaseService.editProduct({id, ...result.value});
    });
  }

  deleteProduct(id: string) {
    this.firebaseService.deleteProduct(id).finally(() => location.reload());
  }

}
