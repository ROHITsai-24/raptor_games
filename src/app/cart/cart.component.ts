import { Component } from '@angular/core';
import { cart } from '../service/cart';
import { CartService } from '../service/cart.service';
import { WishlistService } from '../service/wishlist.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  cartlist: cart[]=[]
  constructor(private cart:CartService,private router:Router){}
  
  ngOnInit(){
    this.cart.getitems().subscribe((data:any)=>{
      this.cartlist=data
    })
  }
  cartlen:any
  ngDoCheck(){
    this.cartlen=this.cart.totalproducts()
  }
  
  buynow(c:any){
    this.router.navigateByUrl('/user/payments/'+c.id)
  }
}

