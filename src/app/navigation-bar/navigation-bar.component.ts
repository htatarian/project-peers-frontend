import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {isNull} from 'util';
import {AuthenticationService} from '../services/authentication.service';

@Component({
    selector: 'app-navigation-bar',
    templateUrl: './navigation-bar.component.html',
    styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {

    constructor(private authService: AuthenticationService) {
    }

    ngOnInit() {
    }

    onNavbarCollapse() {
        $('#navbarNav').removeClass('show');
    }
}
