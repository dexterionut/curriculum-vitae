import { Component, OnInit } from '@angular/core';
import { DataService } from '../../shared/services/data.service';
import { ITextBlockWithDate } from '../../shared/models/text-block-with-date';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.scss']
})
export class WorkExperienceComponent implements OnInit {
  workExperience: ITextBlockWithDate[];

  constructor(private dataService: DataService) {
    this.workExperience = this.dataService.getWorkExperience();
  }

  ngOnInit() {
  }

}
