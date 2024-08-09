import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  username:any;
  password:any;
  email:any;
  contact:any;
  confirmpassword:any;
  reqpwd:any;
  signeduser:any
  
  
  loginform:FormGroup=new FormGroup({});
  
  constructor(private route:Router, private fb:FormBuilder){
    this.loginform=this.fb.group({
      username:['', Validators.required],
      password:['', Validators.required]
    }
  )
  }
  checkuser:any;
  signup(){
    this.reqpwd=this.username.slice(0,5);
    this.reqpwd=this.reqpwd+"123"
  
    if(this.reqpwd==this.password&&this.reqpwd==this.confirmpassword){
      alert("registration successful")
      this.signeduser={
        username:this.username,
        password:this.password,
        email:this.email,
        contact:this.contact,
        
      }
      localStorage.setItem('users',JSON.stringify(this.signeduser))
      this.route.navigateByUrl('/')
    }
    else{
      alert("check the details enterd")
    }
  }
  
  ngDoCheck(){
    if(localStorage.getItem('users')!=null){
      this.checkuser=localStorage.getItem('users');
      this.checkuser=JSON.parse(this.checkuser);
    }
  }
  loggedinuser:any
  checklogin(){
      if(this.loginform.value.password==this.checkuser.password){
        this.route.navigateByUrl('/user/products')
        alert("login success")
      }
      else{
        alert("login failed")
      }
    }
  
  }
  

