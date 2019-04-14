import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ProjectsListComponent} from './projects/projects-list/projects-list.component';
import {ProjectDetailComponent} from './projects/project-detail/project-detail.component';
import {HttpClientModule} from '@angular/common/http';
import {NavigationBarComponent} from './navigation-bar/navigation-bar.component';
import {AboutComponent} from './about/about.component';
import {NewProjectDetailComponent} from './projects/new-project-detail/new-project-detail.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {LogoutComponent} from './logout/logout.component';
import {FlexLayoutModule} from '@angular/flex-layout';

@NgModule({
    declarations: [
        AppComponent,
        ProjectsListComponent,
        ProjectDetailComponent,
        NavigationBarComponent,
        AboutComponent,
        NewProjectDetailComponent,
        LoginComponent,
        RegisterComponent,
        LogoutComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule,
        ReactiveFormsModule,
        FlexLayoutModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule {
}
