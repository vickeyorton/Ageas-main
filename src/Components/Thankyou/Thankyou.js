import React,{useState} from 'react';
import '../Home/CarInfo/CarInfo.css';
import CarInfo from "../Home/CarInfo/CarInfo";
import login from "../Login/Login.css";
import "../IncidentDetail/incidentDetail.css";

function Thankyou() {
    return (
        <div className="col-lg-6 col-md-12 col-sm-12">
            <div className="Section-2">
                <div className="Section-2-Header">
                    summary detail
                </div>
                <div className="Section-2-Body">
                    <div className="headingText">
                        <div>Thank you for submitting you claim, one of our claims handlers will be in touch by the end of the next working day.</div>
                    </div>
                    <div>
                        <label className="labelTextIncident">The claim number for your policy is:  <strong>4062863N</strong></label>
                    </div>
                    <br/>
                    <div>
                        <label className="labelTextIncident" style={{"font-size":"10px"}}>If you need to contact us please call :  <a href="tel:0345 122 3018">0345 122 3018</a></label>
                    </div>
                    <br/>
                </div>
            </div>
        </div>
    )
}

export default Thankyou