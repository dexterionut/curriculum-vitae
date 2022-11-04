import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { BioComponent } from './bio/bio.component';
import { EducationComponent } from './education/education.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component';
import { SkillsComponent } from './skills/skills.component';
import { ProjectsComponent } from './projects/projects.component';
import { SharedModule } from '../shared/shared.module';
import {LanguagesComponent} from './languages/languages.component';

@NgModule({
  declarations: [
    PersonalInfoComponent,
    BioComponent,
    EducationComponent,
    WorkExperienceComponent,
    SkillsComponent,
    LanguagesComponent,
    ProjectsComponent,
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    PersonalInfoComponent,
    BioComponent,
    EducationComponent,
    WorkExperienceComponent,
    SkillsComponent,
    LanguagesComponent,
    ProjectsComponent,
  ]
})
export class CvModule {
}
