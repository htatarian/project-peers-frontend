import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {ProjectsListComponent} from './projects/projects-list/projects-list.component';
import {ProjectDetailComponent} from './projects/project-detail/project-detail.component';
import {AboutComponent} from './about/about.component';
import {NewProjectDetailComponent} from './projects/new-project-detail/new-project-detail.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {LogoutComponent} from './logout/logout.component';

const routes: Routes = [
    {path: '', component: ProjectsListComponent, pathMatch: 'full'},
    {path: 'projects', component: ProjectsListComponent},
    {path: 'projects/:id', component: ProjectDetailComponent},
    {path: 'new-project', component: NewProjectDetailComponent},
    {path: 'about', component: AboutComponent},
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'logged-out', component: LogoutComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
              HttpClientModule],
  exports: [RouterModule]
})

export class AppRoutingModule { }
