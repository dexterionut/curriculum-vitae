import { Component, OnInit } from '@angular/core';
import { DataService } from '../../shared/services/data.service';

@Component({
  selector: 'app-bio',
  templateUrl: './bio.component.html',
  styleUrls: ['./bio.component.scss']
})
export class BioComponent implements OnInit {
  bio: string;

  constructor(private dataService: DataService) {
    this.bio = this.dataService.getBio();
  }

  ngOnInit() {
  }

}
