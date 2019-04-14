import {Component, OnInit} from '@angular/core';
import {Project} from '../project.model';
import {ProjectService} from '../../services/project.service';
import {Observable} from 'rxjs';

@Component({
    selector: 'app-projects-list',
    templateUrl: './projects-list.component.html',
    styleUrls: ['./projects-list.component.css']
})
export class ProjectsListComponent implements OnInit {

    projects: Project[];
    currentOwner: string;

    constructor(private projectService: ProjectService) {
    }

    ngOnInit() {
        this.projectService.getProjects()
            .subscribe(projects => this.projects = projects);
    }

    getOwner(id: string) {
        this.projectService.getOwner(id).subscribe(value => this.currentOwner = value);
        return this.currentOwner;
    }
}
