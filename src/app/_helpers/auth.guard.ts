import { from } from 'rxjs';
import {Injectable} from '@angular/core'
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router'
import { Route } from '@angular/compiler/src/core';
import {AuthenticationService} from '../_services/authentication.service'
@Injectable({providedIn: 'root'})
export class AuthGuard implements CanActivate{
    constructor(
        private router: Router,
        private authenticationService: AuthenticationService
    ){}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
        const currentUser = this.authenticationService.currentUserValue;
        if(currentUser){ return true }

        this.router.navigate(['login'], { queryParams: { returnUrl: state.url } });
        return false;
    }

}
