import { Injectable } from '@angular/core';
import { wishlist } from './wishlist';
import { of } from 'rxjs';
import { CartService } from './cart.service';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  constructor() { }
  wishlist_list: wishlist[]=[]

  getitems(){
    return of(this.wishlist_list)
  }
  addtowishlist(pro:any){
  this.wishlist_list.push(pro)
  }

}
