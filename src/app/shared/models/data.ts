import { IPersonalInfo } from './personal-info';
import { ITextBlockWithDate } from './text-block-with-date';
import { IProjectBlock } from './project-block';
import { IWorkExperienceBlock } from './work-experience-block';
import { ISkills } from './skills';
import {ILanguage} from './language';

export interface ICVData {
  personalInfo: IPersonalInfo;
  bio: string;
  education: ITextBlockWithDate[];
  workExperience: IWorkExperienceBlock[];
  skills: ISkills;
  languages: ILanguage[];
  projects: IProjectBlock[];
}
