import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../service/products.service';
import { CartService } from '../service/cart.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.css']
})
export class PaymentsComponent {
  agreeTerms = false;  // Add this line to track the state of the checkbox
  newobj: any;
  pid: any;
  p: any;

  constructor(
    private b1: ActivatedRoute,
    private service: ProductsService,
    private cart: CartService,
    private route: Router
  ) {}

  ngOnInit() {
    this.pid = this.b1.snapshot.paramMap.get('id');
    this.p = this.service.getproductsbyid(this.pid);
  }

  placeorder() {
    if (this.agreeTerms) {
      console.log(this.p);
      this.cart.addtoorder(this.p);
      Swal.fire({
        title: 'Thanks for your order!',
        text: 'Ready to download your product?',
        imageUrl: 'bag.png', // Add your image path here
        imageWidth: 300, // Adjust as necessary
        imageHeight: 300, // Adjust as necessary
        imageAlt: 'Custom image',
        showCancelButton: true,
        confirmButtonColor: '#007bff',
        cancelButtonColor: 'green',
        confirmButtonText: 'View in Library',
        cancelButtonText: 'Continue Browsing',
        background: '#202024', // Dark background
        color: '#fff', // White text color
        reverseButtons: true // This property swaps the positions of the buttons
      }).then((result) => {
        if (result.isConfirmed) {
          // Perform the action for "View in Library" here
          console.log('Viewing in Library...');
          this.route.navigateByUrl('user/library');
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          console.log('Continuing Browsing...');
          this.route.navigateByUrl('user/products');
        }
      });
    }
  }
}
