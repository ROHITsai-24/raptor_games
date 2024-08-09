import { Component } from '@angular/core';
import { WishlistService } from '../service/wishlist.service';
import { wishlist } from '../service/wishlist';
import { CartService } from '../service/cart.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrl: './wishlist.component.css'
})
export class WishlistComponent {

  wishlist_list: wishlist[]=[]
  constructor(private wish:WishlistService, private cart1:CartService){}
  
  ngOnInit(){
    this.wish.getitems().subscribe((data:any)=>{
      this.wishlist_list=data
    })
  }
  cart(addto:any){
    this.cart1.addtocart(addto)
    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 1700,
      timerProgressBar: true,
      background: "#333", // Dark background color
      color: "#fff", // White text color
      customClass: {
        popup: 'colored-toast'
      },
      didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
      }
    });
    
    Toast.fire({
      icon: "success",
      title: "added to cart"
    });
  }
}
