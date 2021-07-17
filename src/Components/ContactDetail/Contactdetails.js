import React,{useState} from 'react';
import '../Home/CarInfo/CarInfo.css';
import CarInfo from "../Home/CarInfo/CarInfo";
import login from "../Login/Login.css";
import "../IncidentDetail/incidentDetail.css";

function Contactdetails() {
    return (
        <div className="col-lg-6 col-md-12 col-sm-12">
            <div className="Section-2">
                <div className="Section-2-Header">
                    Incident detail
                </div>
                <div className="Section-2-Body">
                    <div className="headingText">
                        Please enter at least one phone number and an email address
                    </div>
                    <div>
                        <label className="labelTextIncident">Home telephone number</label>
                        <input className="inputFieldCss" style={{"margin-left": "0px"}}/>
                    </div>
                    <div>
                        <label className="labelTextIncident">Mobile telephone number</label>
                        <input className="inputFieldCss" style={{"margin-left": "0px"}}/>
                    </div>
                    <div>
                        <label className="labelTextIncident">Email address*</label>
                        <input className="inputFieldCss" style={{"margin-left": "0px"}}/>
                    </div>
                    <div className="headingText">
                        Who was the last drive of the vehicle?*
                        <div className="Button-Container" style={{"margin-left":" -2%"}}>
                            <input type="radio" id="existing" name="isExisting" value="existing" />
                            <label htmlFor="existing" className="cardetail">MR November</label>
                            <input type="radio" id="notexisting" name="isExisting" value="notexisting"/>
                            <label htmlFor="notexisting" className="cardetail">Other/Unknown</label>
                        </div>
                    </div>
                    <div>
                        <input type="button" value="Back" className="buttonBackStyle"/>
                        <input type="button" value="Continue" className="buttoncontinueStyle"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contactdetails;