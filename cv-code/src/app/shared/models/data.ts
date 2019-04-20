import { IPersonalInfo } from './personal-info';
import { ITextBlockWithDate } from './text-block-with-date';
import { ITextBlock } from './text-block';
import { IProjectBlock } from './project-block';

export interface ICVData {
  personalInfo: IPersonalInfo;
  bio: string;
  education: ITextBlockWithDate[];
  workExperience: ITextBlockWithDate[];
  skills: ITextBlock[];
  projects: IProjectBlock[];
}
