import { Injectable } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { doc, setDoc, getFirestore, collection, getDocs, deleteDoc } from 'firebase/firestore';
import { environment } from '../../environments/environment';
import { Product } from '../entities/product';

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  private db;

  constructor() {
    // Initialize Firebase
    const app = initializeApp(environment.firebase);
    // Initialize Cloud Firestore and get a reference to the service
    this.db = getFirestore(app);
  }

  public async getProducts() {
    const documents: Array<Product> = [];
    const querySnapshot = await getDocs(collection(this.db, 'Products'));
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      const { description, price, volume, volumeUnit } = doc.data();
      const product: Product = {
        id: doc.id,
        description,
        price,
        volume,
        volumeUnit,
      };
      documents.push(product);
    });
    return documents;
  }

  public async addProduct(product: Product) {
    // Add a new document in collection "products"
    const newProductRef = doc(collection(this.db, "Products"));
    await setDoc(newProductRef, product);
  }

  public editProduct() {

  }

  public async deleteProduct(id: string) {
    await deleteDoc(doc(this.db, "Products", id));
  }
}
