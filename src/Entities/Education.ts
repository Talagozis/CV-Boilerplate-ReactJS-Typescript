import { Course } from "./Course";
import { Project } from "./Project";


export class Education {
    title: string;
    university: string;
    courseYears: number;
    graduationDate: Date;
    thesisTitle: string;
    description: string;
    mainCourses: Course[];
    projects: Project[];
}
