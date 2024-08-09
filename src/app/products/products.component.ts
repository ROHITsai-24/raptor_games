import { Component } from '@angular/core';
import { ProductsService } from '../service/products.service';
import { Router } from '@angular/router';
import { CartService } from '../service/cart.service';
import { product } from '../service/product';
import { WishlistService } from '../service/wishlist.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {


  constructor(private service:ProductsService,private route:Router, private wish:WishlistService){}
  productlist:product[]=[]
  productlist2:product[]=[]
  productlist3:product[]=[]
  productlist4:product[]=[]
  productlist5:product[]=[]
  productlist6:product[]=[]
  ngOnInit(){
    this.service.getproducts().subscribe((data)=>{
            this.productlist=data
    })
    this.service.getproducts2().subscribe((data2)=>{
      this.productlist2=data2
})
this.service.getproducts3().subscribe((data3)=>{
  this.productlist3=data3
})
this.service.getproducts4().subscribe((data4)=>{
  this.productlist4=data4
})
this.service.getproducts5().subscribe((data5)=>{
  this.productlist5=data5
})
this.service.getproducts6().subscribe((data6)=>{
  this.productlist6=data6
})
  }
  wishlist(addto:any){
    this.wish.addtowishlist(addto)
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
      title: "added to wishlist"
    });
  }
  details(pid:any){
    this.route.navigateByUrl('/user/details/'+pid)
  }
}
