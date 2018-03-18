import * as React from "react";
import { Person } from "../../Entities/Person";


class PageLoader extends React.Component<Person, Person> {
    constructor(person: Person) {
        super(person);
        this.state = person;
    }
    getJobTitles(jobTitles: string[]) {
        return jobTitles.map(jobTitle => jobTitle).join(" / ");
    }
    public render() {  
        return (
            <div className="loader" id="page-loader"> 
                <div className="loading-wrapper">
                    <div className="tp-loader spinner"/>
                    <div className="side-menu-name">
                        <span>{this.state.forename}</span>
                        <strong>{this.state.surname}</strong>
                    </div>
                    <p className="side-menu-job">
                        {this.getJobTitles(this.state.jobTitles)}
                    </p>
                </div>   
            </div>
        );
    }
}
  
export default PageLoader;

