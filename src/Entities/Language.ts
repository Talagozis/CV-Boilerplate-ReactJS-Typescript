export class Language {
    name: string;
    certification: string;
    proficiency: LanguageProficiency;
}

export enum LanguageProficiency {
    Native = 1,
    Elementary = 2,
    LimitedWorking = 3,
    ProfessionalWorking = 4,
    FullProfessionalWorking = 5,
}
