import { Component } from '@angular/core';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrl: './library.component.css'
})
export class LibraryComponent {
constructor(private cart:CartService){}
librarylist:any;
  ngOnInit(){
    this.cart.getorders().subscribe((data:any)=>{
      this.librarylist=data
      console.log(data)
    })
  }
}
