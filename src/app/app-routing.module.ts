import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CollectionComponent } from './components/collection/collection.component';
import { Page404Component } from './components/page404/page404.component';
import { ProductComponent } from './components/product/product.component';

const routes: Routes = [
  { path: '', redirectTo: 'collection/266329686089',  pathMatch: 'full' },
  { path: 'collection/:collection_id', component: CollectionComponent},
  { path: 'collection/:collection_id/:product_id', component: ProductComponent},
  { path: '**', component: Page404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
