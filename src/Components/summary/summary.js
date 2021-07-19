import React from 'react';
import './summary.css';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import LogoHeader from "../LogoHeader/LogoHeader";
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import { withStyles } from '@material-ui/core/styles';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Stepper from './Stepper/Stepper';


const Accordion = withStyles({
    root: {
      border: '1px solid rgba(0, 0, 0, .125)',
      boxShadow: 'none',
      '&:not(:last-child)': {
        borderBottom: 0,
      },
      '&:before': {
        display: 'none',
      },
      '&$expanded': {
        margin: 'auto',
      },
    },
    expanded: {},
  })(MuiAccordion);
  
  const AccordionSummary = withStyles({
    root: {
      backgroundColor: '#fff',
    //   borderBottom: '1px solid rgba(0, 0, 0, .125)',
      marginBottom: -1,
      minHeight: 56,
      '&$expanded': {
        minHeight: 56,
      },
    },
    content: {
      '&$expanded': {
        margin: '12px 0',
      },
    },
    expanded: {},
  })(MuiAccordionSummary);
  
  const AccordionDetails = withStyles((theme) => ({
    root: {
      padding: theme.spacing(2),
    },
  }))(MuiAccordionDetails);


function Summary(props) {
    const [expanded, setExpanded] = React.useState('panel1');

    const handleChange = (panel) => (event, newExpanded) => {
      setExpanded(newExpanded ? panel : false);
    };
    const incident = props.incidentInfo;
    const contact = props.contactInfo;
    const involved = props.involvedInfo;
  
    return (
        <div className="Summary-Container">
            <LogoHeader/>
            <Stepper/>
            <div className="Summary-Section">
                <div className="Summary-Section-Header">
                Summary details
                </div>
                <div className="Incident-Section-Body">
                You have now entered all of your claim details.<br></br>
                Please review the details below and once you are happy you can
                submit your claim.
                    <div className="Summary-Info-Accordion">
                        <Accordion 
                        // square expanded={expanded === 'panel1'} onChange={handleChange('panel1')}
                        defaultExpanded={true}>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1d-content" id="panel1d-header">
                            <p className="Summary-Accordion-Title">Incident details</p>
                            </AccordionSummary>
                            <AccordionDetails>
                                <div className="Summary-100-Width">
                                    <div className="Summary-Row">
                                        <div className="Acc-Sub-Title Summary-col-lg-3 Summary-col-sm-12 Summary-col-md-6">
                                        Date & Time
                                        </div>
                                        <div className="Summary-col-lg-9 Summary-col-sm-12 Summary-col-md-6">
                                        {incident ? incident.date : "DD"}/{incident ? incident.month : "MM"}/{incident ? incident.year : "YYYY"} {incident ? incident.hour : "H"}:{incident ? incident.minute : "M"}
                                        </div>
                                    </div>
                                    <div className="Summary-Row">
                                        <div className="Acc-Sub-Title Summary-col-lg-3 Summary-col-sm-12 Summary-col-md-6">
                                        Vehicle registration
                                        </div>
                                        <div className="Summary-col-lg-9 Summary-col-sm-12 Summary-col-md-6">
                                        {incident ? incident.vehicleReg : "-"}
                                        </div>
                                    </div>
                                    <div className="Summary-Row">
                                        <div className="Acc-Sub-Title Summary-col-lg-3 Summary-col-sm-12 Summary-col-md-6">
                                        Circumstance
                                        </div>
                                        <div className="Summary-col-lg-9 Summary-col-sm-12 Summary-col-md-6">
                                        {incident ? incident.situation : "-"}
                                        </div>
                                    </div>
                                    <div className="Edit-Button-Container">
                                    <Link to="/incident"><button className="Summary-Edit-Button" type="button" >Edit</button></Link>
                                    </div>
                                </div>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion 
                        // square expanded={expanded === 'panel2'} onChange={handleChange('panel2')}
                        defaultExpanded={true}>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2d-content" id="panel2d-header">
                            <p className="Summary-Accordion-Title">Contact details</p>
                            </AccordionSummary>
                            <AccordionDetails>
                            <div className="Summary-100-Width">
                                    <div className="Summary-Row">
                                        <div className="Acc-Sub-Title Summary-col-lg-3 Summary-col-sm-12 Summary-col-md-6">
                                        Home telephone
                                        </div>
                                        <div className="Summary-col-lg-9 Summary-col-sm-12 Summary-col-md-6">
                                        {contact ? contact.homePhone : "-"}
                                        </div>
                                    </div>
                                    <div className="Summary-Row">
                                        <div className="Acc-Sub-Title Summary-col-lg-3 Summary-col-sm-12 Summary-col-md-6">
                                        Mobile telephone
                                        </div>
                                        <div className="Summary-col-lg-9 Summary-col-sm-12 Summary-col-md-6">
                                        {contact ? contact.mobilePhone : "-"}
                                        </div>
                                    </div>
                                    <div className="Summary-Row">
                                        <div className="Acc-Sub-Title Summary-col-lg-3 Summary-col-sm-12 Summary-col-md-6">
                                        Email
                                        </div>
                                        <div className="Summary-col-lg-9 Summary-col-sm-12 Summary-col-md-6">
                                        {contact ? contact.email : ""}
                                        </div>
                                    </div>
                                    <div className="Edit-Button-Container">
                                    <Link to="/contact"><button className="Summary-Edit-Button" type="button" >Edit</button></Link>
                                    </div>
                                </div>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion 
                        // square expanded={expanded === 'panel3'} onChange={handleChange('panel3')}
                        defaultExpanded={true}>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel3d-content" id="panel3d-header">
                            <p className="Summary-Accordion-Title">Involved parties details</p>
                            </AccordionSummary>
                            <AccordionDetails>
                                
                                <div className="Summary-100-Width">
                                    <div className="Summary-Sub-Info-Title">
                                        Your vehicle
                                    </div>
                                    <div className="Summary-Padding-10">
                                        <div className="Summary-100-Width">
                                            <div className="Summary-Row">
                                                <div className="Acc-Sub-Title Summary-col-lg-3 Summary-col-sm-12 Summary-col-md-6">
                                                No of passengers
                                                </div>
                                                <div className="Summary-col-lg-9 Summary-col-sm-12 Summary-col-md-6">
                                                {involved ? involved.val : "N/A"}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="Summary-Sub-Info-Title">
                                    Their vehicle
                                    </div>
                                    <div className="Summary-Padding-10">
                                        <div className="Summary-Row">
                                            <div className="Acc-Sub-Title Summary-col-lg-3 Summary-col-sm-12 Summary-col-md-6">
                                            Registration
                                            </div>
                                            <div className="Summary-col-lg-9 Summary-col-sm-12 Summary-col-md-6">
                                            {involved ? involved.reg ? involved.reg : "N/A" : "N/A"}
                                            </div>
                                        </div>
                                        <div className="Summary-Row">
                                            <div className="Acc-Sub-Title Summary-col-lg-3 Summary-col-sm-12 Summary-col-md-6">
                                            Driver name
                                            </div>
                                            <div className="Summary-col-lg-9 Summary-col-sm-12 Summary-col-md-6">
                                            {involved ? involved.name ? involved.name : "N/A" : "N/A"}
                                            </div>
                                        </div>
                                        <div className="Summary-Row">
                                            <div className="Acc-Sub-Title Summary-col-lg-3 Summary-col-sm-12 Summary-col-md-6">
                                            No of passengers
                                            </div>
                                            <div className="Summary-col-lg-9 Summary-col-sm-12 Summary-col-md-6">
                                            {involved ? involved.passenger ? involved.passenger : "N/A" : "N/A"}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="Edit-Button-Container">
                                    <Link to="/involved"><button className="Summary-Edit-Button" type="button" >Edit</button></Link>
                                    </div>
                                </div>
                            </AccordionDetails>
                        </Accordion>
                    </div>
                    <div class="Summary-Bottom-Buttons">
                        <Link to="/involved"> 
                            <input type="button" class="Summary-BackBtn-Style" value="Back"/>
                        </Link>
                        <Link to="/thankyou"> 
                            <input type="button" class="Summary-ContinueBtn-Style" value="Submit"/>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}


const mapStateToProps = (state) => {
    return {
        state,
        incidentInfo: state.CarReducer.incident,
        contactInfo: state.CarReducer.contact,
        involvedInfo:state.CarReducer.involved,
      };
      
}

export default connect(mapStateToProps,null)(Summary);
