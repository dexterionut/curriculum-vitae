import { Component, Input, OnInit } from '@angular/core';
import { ITextBlockWithDate } from '../../shared/models/text-block-with-date';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.scss']
})
export class WorkExperienceComponent implements OnInit {
  @Input() workExperience: ITextBlockWithDate[];

  constructor() {
  }

  ngOnInit() {
  }

}
