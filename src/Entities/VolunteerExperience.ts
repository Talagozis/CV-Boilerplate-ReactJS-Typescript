export class VolunteerExperience {
    organizationName: string;
    position: string;
    causes: VolunteerCause[];
    startDate: Date;
    endDate?: Date | null;
    description: string;
    link: string;
}

export enum VolunteerCause {
    ArtsAndCulture = 1,
    AnimalRights = 2,
    Children = 3,
    CivilRights = 4,
    HumanitarianRelief = 5,
    EconomicEmpowerment = 6,
    Education = 7,
    Enviroment = 8,
    Health = 9,
    HumanRights = 10,
    Politics = 11,
    PovertyAlleviation = 12,
    ScienceAndTechnology = 13,
    SocialServices = 14,
}