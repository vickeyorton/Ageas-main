import React, { useState } from "react";
import "./ContactDetails.css";
// import "../IncidentDetail/incidentDetail.css";
import Stepper from './Stepper/Stepper';
import LogoHeader from '../LogoHeader/LogoHeader';
import { SettingsSystemDaydreamOutlined } from "@material-ui/icons";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { GET_CONTACT } from "../../Redux/actions";

function Contactdetails(props) {
  const [mobilePhone, setMobilePhone] = useState(null);
  const [homePhone, setHomePhone] = useState(null);
  const [email, setEmail] = useState(null);

  const history = useHistory();
  const onClickHandler = () => {
    const conObj = {
      mobilePhone: mobilePhone,
      homePhone: homePhone,
      email: email,
    };
    props.passData(conObj);
    history.push("/involved");
  };
  return (
    <div className="row1">
        <LogoHeader/>
        <Stepper/>
        
      
      <div className="col-md-12 col-sm-12">
        <div className="Section-2">
          <div className="Section-2-Header">Contact details</div>
          <div className="Section-2-Body">
            <div className="headingText">
              Please enter at least one phone number and an email address
            </div>
            <div>
              <label className="labelTextIncident">Home telephone number</label>
              <input
                className="inputFieldCss"
                style={{ "margin-left": "0px" }}
                onChange={(e) => setHomePhone(e.target.value)}
              />
            </div>
            <div>
              <label className="labelTextIncident">
                Mobile telephone number
              </label>
              <input
                className="inputFieldCss"
                style={{ "margin-left": "0px" }}
                onChange={(e) => setMobilePhone(e.target.value)}
              />
            </div>
            <div style={{ "margin-bottom": "10px", "font-size": "14px" }}>
              {mobilePhone != null ? (
                <div>Mobile Number : "{mobilePhone}"</div>
              ) : null}
            </div>
            <div>
              <label className="labelTextIncident">Email address*</label>
              <input
                className="inputFieldCss"
                style={{ "margin-left": "0px" }}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="headingText">
              Who was the last drive of the vehicle?*
              <div
                className="Button-Container"
                style={{ "margin-left": " -2%" }}
              >
                <input
                  type="radio"
                  id="existing"
                  name="isExisting"
                  value="existing"
                />
                <label htmlFor="existing" className="cardetail">
                  MR Daniel
                </label>
                <input
                  type="radio"
                  id="notexisting"
                  name="isExisting"
                  value="notexisting"
                />
                <label htmlFor="notexisting" className="cardetail">
                  Other/Unknown
                </label>
              </div>
            </div>
            <div className="Bottom-buttons">
              <input type="button" value="Back" className="buttonBackStyle" />
              
                <input
                onClick={() => onClickHandler()}
                  type="button"
                  value="Continue"
                  className="buttoncontinueStyle"
                />
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
const mapDispatchToProps = (dispatch) => {
  return {
    passData: (conObj) => {
      dispatch({ type: GET_CONTACT, payload: conObj });
    },
  };
};
export default connect(null, mapDispatchToProps)(Contactdetails);
