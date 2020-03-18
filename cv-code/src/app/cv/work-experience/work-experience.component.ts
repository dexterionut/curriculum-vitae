import { Component, Input, OnInit } from '@angular/core';
import {IWorkExperienceBlock} from '../../shared/models/work-experience-block';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.scss']
})
export class WorkExperienceComponent implements OnInit {
  @Input() workExperience: IWorkExperienceBlock[];

  constructor() {
  }

  ngOnInit() {
  }

}
