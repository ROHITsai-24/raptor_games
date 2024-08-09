import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { cart } from './cart';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  carlist: cart[]=[]
  orders:any[]=[]
//   buy:any[]=[]

//   addtobuy(b:any){
//     this.buy.push(b)
//     }
// getitems2(){
//   return of(this.buy)
// }


getitems(){
  return of(this.carlist)
}
addtocart(pro:any){
this.carlist.push(pro)
}

addtoorder(p:any){
this.orders.push(p)
}
getorders(){
  return of(this.orders)
}
totalproducts(){
  return this.carlist.length
}

}

