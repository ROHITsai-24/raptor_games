import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CartComponent } from './cart/cart.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { ProductsComponent } from './products/products.component';
import { SellproductsComponent } from './sellproducts/sellproducts.component';
import { PaymentsComponent } from './payments/payments.component';
import { LibraryComponent } from './library/library.component';
import { LoginComponent } from './login/login.component';
import { ManageproductsComponent } from './manageproducts/manageproducts.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'user',component:DashboardComponent,
    children:[
  {path:'cart',component:CartComponent},
  {path:'wishlist',component:WishlistComponent},
  {path:'details/:id',component:ProductdetailsComponent},
  {path:'products',component:ProductsComponent},
  {path:'library',component:LibraryComponent},
  {path:'manage',component:ManageproductsComponent, canActivate: [AuthGuard]},
  {path:'payments/:id',component:PaymentsComponent},
  {path:'sellproduct',component:SellproductsComponent}]}
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
