import { Person } from "./Person";

export class Project {
    name: string;
    startDate: Date;
    endDate?: Date;
    contributors: Person[];
    link: string;
    githubLink: string;
    description: string;
}
