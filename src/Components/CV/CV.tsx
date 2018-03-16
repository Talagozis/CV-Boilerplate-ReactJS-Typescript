import * as React from "react";

import { Person } from "../../Entities/Person";
import PageLoader from "./PageLoader";
import SideMenu from "./SideMenu";
import Content from "./Content";

// CSS
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap-theme.css";
import "font-awesome/css/font-awesome.css";
import "animate.css";
import "./vertica.css";
import "./CV.css";

// JS
import * as $ from "jquery";
// tslint:disable-next-line:no-any
declare var window: any;
window.jQuery = window.$ = $;
require("bootstrap");
require("jquery.nicescroll");
require("bxslider");
require("./nivo-lightbox.min.js");
require("jquery-validation");
require("./cross-browser");

const baseURL = "me.json";


class CV extends React.Component<{}, Person> {

  async componentWillMount() {
    await this.fetchMembersAsync().then((person) =>
    // console.log(person);
    this.setState(person, () => require("./vertica")));
  }

  fetchMembersAsync = (): Promise<Person> => {
    return fetch(baseURL).then((response) => (response.json()));
  }

  render() {
    return (
      this.state ? (

        <div>

          <PageLoader {... this.state} />

          <SideMenu {... this.state} />

          <Content {... this.state} />

          <div className="form-result modal-wrap" id="contactSuccess">
            <div className="modal-bg" />
            <div className="modal-content">
              <h4 className="modal-title">
                <i className="fa fa-check-circle" /> Success!
            </h4>
              <p>Your message has been sent to us.</p>
            </div>
          </div>

          <div className="form-result modal-wrap" id="contactError">
            <div className="modal-bg" />
            <div className="modal-content">
              <h4 className="modal-title">
                <i className="fa fa-times" /> Error</h4>
              <p>There was an error sending your message.</p>
            </div>
          </div>

          <hr />
          <footer>
            <p>&copy; 2017 - Talagozis Christos</p>
          </footer>

        </div>

      ) : (<div />));

  }
}


export default CV;