import {Component, NgZone, OnInit} from '@angular/core';
import {AuthenticationService} from '../services/authentication.service';
import {Router} from '@angular/router';
import {FormBuilder, Validators} from '@angular/forms';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    loginForm = this.fb.group({
            email: ['', Validators.required],
            password: ['', Validators.required]
        }
    );

    invalidLogin: boolean;

    constructor(private authService: AuthenticationService, private router: Router, private fb: FormBuilder) {

    }

    ngOnInit() {
    }

    get email() {
        return this.loginForm.get('email');
    }

    get password() {
        return this.loginForm.get('password');
    }

    login() {
        this.authService.authenticate(this.loginForm.value).subscribe(value => {
                localStorage.setItem('access-token', value);
                this.router.navigate(['projects']);
            }, error => {
                this.invalidLogin = true;
            }
        );
    }
}
