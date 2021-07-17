import React,{useState} from 'react';
import '../Home/CarInfo/CarInfo.css';
import CarInfo from "../Home/CarInfo/CarInfo";
import login from "../Login/Login.css";
import "../IncidentDetail/incidentDetail.css";

function summary() {
    return (
        <div className="col-lg-6 col-md-12 col-sm-12">
            <div className="Section-2">
                <div className="Section-2-Header">
                    summary detail
                </div>
                <div className="Section-2-Body">
                    <div className="headingText">
                        <div>Your have now entered all of your claim details</div>
                        <div>Please review the details below and once you are happy, you can submit your claim.</div>
                    </div>
                    <div>
                        <label className="labelTextIncident">The vehicle on this policy is: <strong>A1</strong></label>
                    </div>
                    <br />
                    <div>
                        <label className="labelTextIncident">How many passengers were in your vehicle?</label>
                        <br/>
                        <label className="labelTextIncident" style={{"font-size":"10px"}}>If there were more than 5 passengers in your vehicle.please call :<a href="tel:0345 122 3018">0345 122 3018</a></label>
                    </div>
                    <div className="contentdropdown">
                        <select id="cars" name="cars" className="optionDropDown">
                            <option value="0">0</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </div>
                    <hr/>
                    <div className="headingText">
                        <strong>Their Vehicle</strong>
                    </div>
                    <div className="">
                        Was there another vehicle involved?
                        <div className="Button-Container" style={{"margin-left":" -2%"}}>
                            <input type="radio" id="existing" name="isExisting" value="existing" />
                            <label htmlFor="existing">Yes</label>
                            <input type="radio" id="notexisting" name="isExisting" value="notexisting"/>
                            <label htmlFor="notexisting">No</label>
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

export default summary