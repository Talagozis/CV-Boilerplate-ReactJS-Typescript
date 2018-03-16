import * as React from "react";
/*import "./CV.css";*/
import { Person } from "../../Entities/Person";
import PageLoader from "./PageLoader";
import SideMenu from "./SideMenu";


const baseURL = "me.json";


class CV extends React.Component<{}, Person> {
  async componentWillMount() {
    var person: Person = await this.fetchMembersAsync();        
    console.log(person);
    this.state = person;
  }

  fetchMembersAsync = (): Promise<Person> => {
    return fetch(baseURL).then((response) => (response.json()));          
  }

  render() {
    return (
      <div>
        <PageLoader {... this.state} />
            
        <SideMenu {... this.state} />          

        <div className="form-result modal-wrap" id="contactSuccess">
          <div className="modal-bg"/>
          <div className="modal-content">
            <h4 className="modal-title">
              <i className="fa fa-check-circle"/> Success!
            </h4>
            <p>Your message has been sent to us.</p>
          </div>
        </div>

        <div className="form-result modal-wrap" id="contactError">
          <div className="modal-bg"/>
          <div className="modal-content">
            <h4 className="modal-title">
              <i className="fa fa-times"/> Error</h4>
            <p>There was an error sending your message.</p>
          </div>
        </div>
            
      </div>
    );
  }
}


export default CV;