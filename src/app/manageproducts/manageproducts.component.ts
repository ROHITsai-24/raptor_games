import { Component } from '@angular/core';
import { ProductsService } from '../service/products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manageproducts',
  templateUrl: './manageproducts.component.html',
  styleUrl: './manageproducts.component.css'
})
export class ManageproductsComponent {
  productlist:any
  productlist2:any
  productlist4:any
  productlist5:any
  productlist6:any
  constructor(private service:ProductsService, private route:Router){}
  deleteme(pid:any){
    let res= this.service.deleteproduct(pid)
    alert(res)
  }
  ngOnInit(){
    this.service.getproducts().subscribe((res:any)=>{
      this.productlist=res
    })
    this.service.getproducts2().subscribe((res2:any)=>{
      this.productlist2=res2
    })
    this.service.getproducts4().subscribe((res4:any)=>{
      this.productlist4=res4
    })
    this.service.getproducts5().subscribe((res5:any)=>{
      this.productlist5=res5
    })
    this.service.getproducts6().subscribe((res6:any)=>{
      this.productlist6=res6
    })

  }
  editcontent(p:any){
    p.pflag=true
  }
  updateme(p:any){
    p.pflag=false;
    let res = this.service.updateproduct(p)
  }
  checkuser:any

}
