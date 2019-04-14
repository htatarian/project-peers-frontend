import { Component, OnInit } from '@angular/core';
import {ProjectService} from '../../services/project.service';
import {ActivatedRoute} from '@angular/router';
import {Project} from '../project.model';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css']
})
export class ProjectDetailComponent implements OnInit {

  selectedProject: Project;

  constructor(private projectService: ProjectService, private router: ActivatedRoute) { }

  ngOnInit() {
      const id = this.router.snapshot.paramMap.get('id');
      this.projectService.getProject(id).subscribe(project => this.selectedProject = project );
  }
}
