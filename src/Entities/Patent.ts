import { Person } from "./Person";


export class Patent {
    title: string;
    office: string;
    applicationNUmber: string;
    inventors: Person[];
    date: Date;
    description: string;
    link: string;
}
