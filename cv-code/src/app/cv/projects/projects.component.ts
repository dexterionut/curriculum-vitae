import { Component, OnInit } from '@angular/core';
import { DataService } from '../../shared/services/data.service';
import { IProjectBlock } from '../../shared/models/project-block';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projects: IProjectBlock[];

  constructor(private dataService: DataService) {
    this.projects = this.dataService.getProjects();
  }

  ngOnInit() {
  }

}
