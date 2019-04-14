import {Component, OnInit} from '@angular/core';
import {ProjectService} from '../../services/project.service';
import {Project} from '../project.model';
import {Router} from '@angular/router';
import {FormBuilder, Validators} from '@angular/forms';
import {RegisterationService} from '../../services/registeration.service';

@Component({
    selector: 'app-new-project-detail',
    templateUrl: './new-project-detail.component.html',
    styleUrls: ['./new-project-detail.component.css']
})
export class NewProjectDetailComponent implements OnInit {

    newProjectForm = this.fb.group({
        title: ['', Validators.required],
        description: ['', Validators.required]
    });

    constructor(private projectService: ProjectService, private router: Router, private fb: FormBuilder) {
    }

    ngOnInit() {
    }

    get title() {
        return this.newProjectForm.get('title');
    }

    get description() {
        return this.newProjectForm.get('description');
    }

    post() {
        // this.title.setValue(this.title.value().trim());
        // this.description.setValue(this.description.value().trim());
        //
        // if (!this.title.value() || this.description.value()) {
        //     return;
        // }
        console.log(this.newProjectForm.value);
        this.projectService.addProject(this.newProjectForm.value)
            .subscribe(() => this.router.navigateByUrl('projects'));
    }
}
