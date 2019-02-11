import { Component, OnInit } from '@angular/core';
import { DataService } from '../../shared/services/data.service';
import { ITextBlockWithDate } from '../../shared/models/text-block-with-date';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {
  education: ITextBlockWithDate[];

  constructor(private dataService: DataService) {
    this.education = this.dataService.getEducation();
  }

  ngOnInit() {
  }

}
