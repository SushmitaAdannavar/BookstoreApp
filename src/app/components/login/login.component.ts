import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  hide = true;
  loginForm!: FormGroup;

  constructor(private formBuilder:FormBuilder,private userService:UserService){

  }

  ngOnInit(){
  this.loginForm=this.formBuilder.group({
    email:['',[Validators.required,Validators.email]],
    password:['',[Validators.required,Validators.minLength(6)]]
  })
  }

  login(){
    let reqdata={
      email:this.loginForm.value.email,
      password:this.loginForm.value.password,
      
    }
    this.userService.loginService(reqdata).subscribe((result:any)=>{
      console.log(result,'result')
    })
  }
}
