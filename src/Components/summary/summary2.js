import React, {useState}from 'react'
import './summary.css';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import LogoHeader from "../LogoHeader/LogoHeader";


function Summary(props) {
    const [showIncident, setShowIncident] = useState(true);
    const [showContact, setShowContact] = useState(true);
    const [showParty, setShowParty] = useState(true);
    const incident = props.incidentInfo;

    return (
      <div className="Summary-container">
          <LogoHeader/>
        <div className="Summary-content">
          <div className="Summary-heading">
            <span>Summary details</span>
          </div>
          <div className="Summary-sec-1">
            <div>
              You have now entered all of your claim details.<br></br>
              Please review the details below and once you are happy you can
              submit your claim.
            </div>
          </div>
          <hr></hr>
          <div className="Summary-sec-2">
            <span className='Incident-details'>Incident details</span>
            <div className="plus-icon">{showIncident?<i class="fa fa-angle-up" onClick={()=>setShowIncident(!showIncident)}></i>:<i class="fa fa-angle-down" onClick={()=>setShowIncident(!showIncident)}></i>}</div>
          </div>
          {showIncident ? <div>
              <div className='Incident-details-content'>
                  <div className='date-time-section'>
                     <div className='date-time'>Date & Time</div>
                      <div>{incident ? incident.date : "DD"}/{incident ? incident.month : "MM"}/{incident ? incident.year : "YYYY"} {incident ? incident.hour : "H"}:{incident ? incident.minute : "M"}</div>
                  </div>
                  <div className='vehicle-registration-section'>
                      <div className='vehicle-registration'>Vehicle registration</div>
                      <div>{incident ? incident.vehicleReg : ""}</div>
                  </div>
                  <div className='circumstance-section'>
                      <div className='circumstance'>Circumstance</div>
                      <div className='circumstance-para'>{incident ? incident.situation : ""}</div>
                      <div><button className='edit'><Link to="/incident">Edit</Link></button></div>
                  </div>
              </div>
          </div> : null}
          <hr></hr>
          <div className="Summary-sec-2">
            <span className='Incident-details'>Contact details</span>
            <div className="plus-icon">{showContact?<i class="fa fa-angle-up" onClick={()=>setShowContact(!showContact)}></i>:<i class="fa fa-angle-down" onClick={()=>setShowContact(!showContact)}></i>}</div>
          </div>
          {showContact ? <div>
              <div className='Contact-details-content'>
                  <div className='home-telephone-section'>
                     <div className='home-telephone'>Home telephone</div>
                      <div>07733169866</div>
                  </div>
                  <div className='mobile-telephone-section'>
                      <div className='mobile-telephone'>Mobile telephone</div>
                      <div>9849223378</div>
                  </div>
                  <div className='email-section'>
                      <div className='email'>Email</div>
                      <div className='email-para'>test@ageas.co.uk</div>
                      <div><button className='edit'><Link to="/contact">Edit</Link></button></div>
                  </div>
              </div>
          </div> : null}
          <hr></hr>
          <div className="Summary-sec-2">
            <span className='Incident-details'>Involved parties details</span>
            <div className="plus-icon">{showParty?<i class="fa fa-angle-up" onClick={()=>setShowParty(!showParty)}></i>:<i class="fa fa-angle-down" onClick={()=>setShowParty(!showParty)}></i>}</div>
          </div>
          {showParty ? <div>
              <div className='Involved-parties-content'>
                  <div className='your-vehicle-section'>
                      <div>Your vehicle</div>
                      <div className='passengers-section'>
                          <div className='passengers-heading'>No of passengers</div>
                          <div className='passengers-value'>1</div>
                      </div>
                  </div>
                  <div className='their-vehicle-section'>
                    <div>Their vehicle</div> 
                    <div className='registration-section'>
                      <div className='registration-heading'>Registration</div>
                          <div classNpassengers-value-2ame='registration-value'>N|A</div>
                    </div>
                    <div className='driver-section'>
                      <div className='driver-heading'>Driver name</div>
                      <div className='driver-value'>N|A</div>
                    </div>
                    <div className='passengers-section'>
                          <div className='passengers-heading'>No of passengers</div>
                          <div className='passengers-value-2'>1</div>
                          <div><button className='edit'><Link to="/involved">Edit</Link></button></div>
                    </div>

                 </div>
              </div>
          </div> : null}
           <div className='submit-section'>
               <div className='back-button'>
                   <button className='edit1'><Link to="/involved">Back</Link></button>
                </div>
               <div className='submit-button'>
                   <button className='edit2'><Link to="/thankyou">Submit</Link></button>
                </div>
           </div>
           
        
          </div>
          
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        state,
        incidentInfo: state.CarReducer.incident,
      };
      
}

export default connect(mapStateToProps,null)(Summary);