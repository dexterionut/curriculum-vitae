import { IPersonalInfo } from './personal-info';
import { ITextBlockWithDate } from './text-block-with-date';
import { IProjectBlock } from './project-block';
import { IWorkExperienceBlock } from './work-experience-block';
import { ISkills } from './skills';

export interface ICVData {
  personalInfo: IPersonalInfo;
  bio: string;
  education: ITextBlockWithDate[];
  workExperience: IWorkExperienceBlock[];
  skills: ISkills;
  projects: IProjectBlock[];
}
