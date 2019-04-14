import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import set = Reflect.set;
import {AuthenticationService} from '../services/authentication.service';

@Component({
    selector: 'app-logout',
    templateUrl: './logout.component.html',
    styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

    constructor(private cd: ChangeDetectorRef, private router: Router, private authService: AuthenticationService) {
    }

    ngOnInit() {
        this.authService.logout();
        setTimeout(() => {
            this.router.navigate(['login']);
        }, 3000);
    }
}
