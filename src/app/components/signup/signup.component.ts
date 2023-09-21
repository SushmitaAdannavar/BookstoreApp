import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  hide = true;
  bgcolor:boolean=false;
  signupForm!:FormGroup;

  constructor(private formBuilder:FormBuilder,private userService:UserService){}

  ngOnInit(){
    this.signupForm=this.formBuilder.group({
      fullName:['',Validators.required],
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.minLength(6)]],
      phoneNumber:['',Validators.required]
    })
    }
  
  

  signup(){
   let reqdata={
    fullName:this.signupForm.value.fullName,
    email:this.signupForm.value.email,
    password:this.signupForm.value.password,
    phone:this.signupForm.value.phoneNumber
   }
   this.userService.signupService(reqdata).subscribe((result:any)=>{
    console.log(result,'result');
   })
  }

  
}
