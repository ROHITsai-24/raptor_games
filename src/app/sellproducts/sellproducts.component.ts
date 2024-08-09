import { Component } from '@angular/core';
import { ProductsService } from '../service/products.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-sellproducts',
  templateUrl: './sellproducts.component.html',
  styleUrl: './sellproducts.component.css'
})
export class SellproductsComponent {
  productform:FormGroup= new FormGroup({});
  constructor(private route:Router, private fb:FormBuilder,private service:ProductsService)
  {this.productform=this.fb.group({
    id:['', Validators.required],
    game_title:['', Validators.required],
    price:['', Validators.required],
    description:['', Validators.required],
    category:['', Validators.required],
    image:['', Validators.required],
  })}
  
  addme(){
    let res = this.service.addproducts(this.productform.value)
    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 3000,
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
      title: "Game added successfully"
    });
    
  }
}
