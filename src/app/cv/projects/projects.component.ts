import { Component, Input, OnInit } from '@angular/core';
import { IProjectBlock } from '../../shared/models/project-block';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  @Input() projects: IProjectBlock[];

  constructor() {
  }

  ngOnInit() {
  }

}
