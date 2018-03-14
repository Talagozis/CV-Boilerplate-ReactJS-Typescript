import { IPerson } from "./IPerson";
import { Education } from "./Education";
import { WorkExperience } from "./WorkExperience";
import { ResearchExperience } from "./ResearchExperience";
import { Skill } from "./Skill";
import { Interest } from "./Interest";
import { Portfolio } from "./Portfolio";
import { Award } from "./Award";


export class Person implements IPerson {
    forename: string;
    surname: string;
    get fullName(): string {
        return this.surname + " " + this.forename;
    }
    dob: Date;
    pob: string;
    gender: string;
    email: string;
    address: string;
    phoneNumber: string;
    nationality: string;
    maritalStatus: string;
    linkedinLink: string;
    githubLink: string;
    jobTitles: string[];
    description: string;
    educations: Education[];
    workExperience: WorkExperience[];
    researchExperience: ResearchExperience[];
    skills: Skill[];
    interests: Interest[];
    portfolios: Portfolio[];
    awards: Award[];
}