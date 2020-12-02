import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { first } from 'rxjs/operators';
import {Router, ActivatedRoute} from '@angular/router';

import {AuthenticationService} 
    from '../../_services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  redirectToUrl = "";
  loginForm: FormGroup;
  submit = false;
  constructor(
    private fb: FormBuilder, 
    private router: Router,
    private route: ActivatedRoute,
    private authenticationService: AuthenticationService) { 
      // nếu đã có currentuser ở localstorage rồi thì
      // điều hướng về trang chủ
      const currentUser = this.authenticationService.currentUser;
      if(currentUser){
        this.router.navigate(['']);
      }
      this.route.queryParams.subscribe(params => {
        this.redirectToUrl = params['returnUrl'];
      });
  }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      identifier: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  get loginFormControl(){
    return this.loginForm.controls;
  }
  
  loginFormSubmit(){
    if(this.loginForm.valid){
      this.submit = true;
      this.authenticationService.login(this.loginForm.value.identifier, this.loginForm.value.password)
        .pipe(first())
        .subscribe(data => {
          if(data != undefined){
            this.router.navigate(['/']);
          }else{
            alert('Sai tài khoản/mật khẩu');
          }
        })
    }
  }

}
