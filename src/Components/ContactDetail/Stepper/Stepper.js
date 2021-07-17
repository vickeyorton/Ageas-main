import React from 'react';
import './Stepper.css'
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';

function getSteps() {
    return ['Incident', 'Contact', 'Involving Parties','Summary'];
  }

function StepperCom() {
    const [activeStep, setActiveStep] = React.useState(1);
  const steps = getSteps();
    return (
        <div className="Stepper-bg">
            <div className="Stepper-Container">
                <div className="Stepper-Container-Padding">
                    <div className="Stepper-inline">
                        <Stepper activeStep={activeStep} alternativeLabel className="Stepper-Component"> 
                            {steps.map((label) => (
                            <Step key={label}>
                                <StepLabel>{label}</StepLabel>
                            </Step>
                            ))}
                        </Stepper>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StepperCom
