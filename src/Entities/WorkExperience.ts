import { Project } from "./Project";


export class WorkExperience {
    position: string;
    companyName: string;
    startDate: Date;
    endDate?: Date;
    description: string;
    typeOfBusiness: string;
    link: string;
    projects: Project[];
}
