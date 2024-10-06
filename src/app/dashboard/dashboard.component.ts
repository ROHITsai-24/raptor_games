import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../service/cart.service';
import Swal from 'sweetalert2';
import { AuthserviceService } from '../service/authservice.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  encapsulation: ViewEncapsulation.Emulated // or ViewEncapsulation.None for global CSS
})
export class DashboardComponent {
  checkuser: any;
  cartlen: any;

  constructor(private route: Router, private cart: CartService, private authService: AuthserviceService) {}

  logout() {
    localStorage.removeItem('users');
    this.authService.deauthenticate(); // Deauthenticate on logout
    this.route.navigateByUrl('/');
  }

  ngOnInit() {
    if (localStorage.getItem('users') != null) {
      this.checkuser = localStorage.getItem('users');
      this.checkuser = JSON.parse(this.checkuser);
    } else {
      this.route.navigateByUrl('/');
    }
  }

  ngDoCheck() {
    this.cartlen = this.cart.totalproducts();
  }

  async sweet() {
    const storedUser = localStorage.getItem('users');
    let storedPassword = '';

    if (storedUser) {
      const User = JSON.parse(storedUser);
      storedPassword = User.password;
    }

    const { value: enteredPassword } = await Swal.fire({
      title: 'Enter your password',
      input: 'password',
      inputLabel: 'Password',
      inputPlaceholder: 'Enter your password',
      inputAttributes: {
        maxlength: '10',
        autocapitalize: 'off',
        autocorrect: 'off'
      },
      showCancelButton: true,
      confirmButtonText: 'Submit',
      cancelButtonText: 'Cancel',
      background: '#202024',
      color: '#fff'
    });

    if (enteredPassword === storedPassword) {
      this.authService.authenticate(); // Authenticate on successful password entry
      this.route.navigateByUrl('/user/manage');
    } else if (enteredPassword) {
      Swal.fire({
        title: 'Error',
        text: 'Incorrect password. Please try again.',
        icon: 'error',
        confirmButtonText: 'OK',
        background: '#202024',
        color: '#fff'
      });
    }
  }
}
