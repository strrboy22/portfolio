export interface Profile {
  name: string;
  profileInfo: ProfileInfo;
  educationalInfo: EducationalInfo;
  socials: Social;
  projects: Project[];
}

export interface ProfileInfo {
  age: number;
  address: string;
}

export interface EducationalInfo {
  school: string;
  degree: string;
  certs: string[];
}

export interface Social {
  github: string;
  linkedIn: string;
  email: string;
}

export interface Project {
  projectName: string;
  description: string;
  stacks: string[];
  mediapath: string;
  mediatype: string;
  role: string;
  year: string;
  status: boolean;
  type: string;
  links: string;
}
