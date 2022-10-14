import { FirebaseService } from './../../shared/firebase.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
  form: FormGroup = new FormGroup({});

  constructor(private firebaseService: FirebaseService) { }

  ngOnInit(): void {
  }

}
