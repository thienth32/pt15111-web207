import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { first } from 'rxjs/operators';

import {AuthenticationService} from '../../_services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  submit = false;
  constructor(private fb: FormBuilder, private authenticationService: AuthenticationService) { 
    
  }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      identifier: ['', [ Validators.required, Validators.email ]],
      password: ['', [ Validators.required ]]
    });
  }

  get loginFormControl(){
    return this.loginForm.controls;
  }

  submitForm(){
    if(this.loginForm.valid){
      this.submit = true;
      this.authenticationService.login(this.loginForm.value.identifier, this.loginForm.value.password)
        .pipe(first())
        .subscribe(data => {
          console.log(data);
        })
    }
  }

}
