import { FormGroup } from '@angular/forms';
import { FirebaseService } from '../../shared/firebase.service';
import { AddProductComponent } from '../add-product/add-product.component';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-productbeheer-container',
  templateUrl: './productbeheer-container.component.html',
  styleUrls: ['./productbeheer-container.component.scss']
})
export class ProductbeheerContainerComponent {

  constructor(private dialog: MatDialog, private firebaseService: FirebaseService) {}

  public newProduct(): void {
    const dialogRef = this.dialog.open(AddProductComponent, {
      height: '540px',
      width: '800px',
    });

    dialogRef
    .afterClosed()
    .subscribe((result: FormGroup) => {
      if(result.value) {
        this.firebaseService.addProduct(result.value);
      }
    });
  }

}
