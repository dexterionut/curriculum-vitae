import { Component, OnInit } from '@angular/core';
import { DataService } from '../../shared/services/data.service';
import { IPersonalInfo } from '../../shared/models/personal-info';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.scss']
})
export class PersonalInfoComponent implements OnInit {
  personalInfo: IPersonalInfo;

  constructor(private dataService: DataService) {
    this.personalInfo = this.dataService.getPersonalInfo();
  }

  ngOnInit() {
  }

}
