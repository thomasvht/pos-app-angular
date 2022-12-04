import { KassaContainerComponent } from './components/kassa-container/kassa-container.component';
import { ProductbeheerContainerComponent } from './components/productbeheer-container/productbeheer-container.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'Kassa', component: KassaContainerComponent},
  { path: 'Productbeheer', component: ProductbeheerContainerComponent},
  { path: '', redirectTo: '/Kassa', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
