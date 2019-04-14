import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {RegisterationService} from '../services/registeration.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {

    error: string;

    registerForm: FormGroup;

    constructor(private router: Router, private fb: FormBuilder, private resgisterationService: RegisterationService) {
    }

    get firstname() {
        return this.registerForm.get('firstname');
    }

    get lastname() {
        return this.registerForm.get('lastname');
    }

    get email() {
        return this.registerForm.get('email');
    }

    get password() {
        return this.registerForm.get('password');
    }

    get confirmpassword() {
        return this.registerForm.get('confirmpassword');
    }

    register() {
        this.resgisterationService.resgister(this.registerForm.value).subscribe(() =>
                this.router.navigateByUrl('login'),
            error => {
                this.error = error;
            }
        );
    }

    ngOnInit() {
        this.registerForm = this.fb.group({
                firstname: ['', Validators.required],
                lastname: ['', Validators.required],
                email: ['', [Validators.required, Validators.email]],
                password: ['', [Validators.required, Validators.minLength(8)]],
                confirmpassword: ['', [Validators.required]]
            }
        );
    }

}
