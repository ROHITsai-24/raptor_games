import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../service/products.service';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrl: './productdetails.component.css'
})
export class ProductdetailsComponent {
constructor(private bs:ActivatedRoute, private service:ProductsService, private route:Router){}
pid:any; p:any

ngOnInit(){
  this.pid=this.bs.snapshot.paramMap.get('id')
  this.p=this.service.getproductsbyid(this.pid)
}

payments(pid:any){
  this.route.navigateByUrl('/user/payments/'+pid)
}
}
