import React from 'react';
import LogoHeader from "../LogoHeader/LogoHeader";
import './Thankyou.css';

function Thankyou() {
    return (
        <div className="Thank-Container">
            <LogoHeader/>
            <div className="Thank-Width-100">
                <div className="Thank-Section">
                    <div className="Thank-Section-Header">
                        Thank you 
                    </div>
                    <div className="Thank-Section-Body">
                        <div className="Thank-header">
                            <div>Thank you for submitting you claim, one of our claims handlers will be in touch by the end of the next working day.</div>
                        </div>
                        <div>
                            <label className="Thank-label">The claim number for your policy is:  <strong>4062863N</strong></label>
                        </div>
                        <br/>
                        <div>
                            <label className="Thank-label" style={{"font-size":"10px"}}>If you need to contact us please call :  <a href="tel:0345 122 3018">0345 122 3018</a></label>
                        </div>
                        <br/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Thankyou