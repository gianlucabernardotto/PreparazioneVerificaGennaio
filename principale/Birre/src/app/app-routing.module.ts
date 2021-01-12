import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchBirreComponent } from './search-birre/search-birre.component';
import { ItemBirreComponent } from './item-birre/item-birre.component';

const routes: Routes = [
  { path: 'item-birre/:id', component:ItemBirreComponent },
  { path: 'search-birre', component: SearchBirreComponent },
  { path: '',   redirectTo: '/search-birre', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
