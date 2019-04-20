import { Component } from '@angular/core';
import { ICVData } from './shared/models/data';
import { DataService } from './shared/services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  cvData: ICVData;

  constructor(private dataService: DataService) {
    this.dataService
      .getCVData()
      .subscribe(
        (data: ICVData) => {
          this.cvData = data;
        }
      );
  }
}
