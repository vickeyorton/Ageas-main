import React,{useState} from 'react';
import { useHistory } from 'react-router-dom';
import "./Claim.css";
import LogoHeader from '../LogoHeader/LogoHeader';

function Claim() {
    const history = useHistory();

    const [q1,setq1] = useState("");
    const [q2,setq2] = useState("");
    const [q3,setq3] = useState("");
    const [q4,setq4] = useState("");
    const [q5,setq5] = useState("");
    const [q6,setq6] = useState("");
    const [q7,setq7] = useState("");
    const [q8,setq8] = useState("");


    const question1Handle = (event) =>{
        setq1(event.target.value);
    }
    const question2Handle = (event) =>{
        setq2(event.target.value);
    }
    const question3Handle = (event) =>{
        setq3(event.target.value);
    }
    const question4Handle = (event) =>{
        setq4(event.target.value);
    }
    const question5Handle = (event) =>{
        setq5(event.target.value);
    }
    const question6Handle = (event) =>{
        setq6(event.target.value);
    }
    const question7Handle = (event) =>{
        setq7(event.target.value);
    }
    const question8Handle = (event) =>{
        setq8(event.target.checked);
        console.log(event.target.checked)
    }

    return (
            <div className="Page-Container">
                <LogoHeader/>
                <div className="col-12">
                    <div className="Section-2">
                        <div className="Section-2-Header">
                            How to make a claim
                        </div>
                        <div className="Section-2-Body">
                            <div className="Question-1">
                                Do you think you or the named driver could have been at fault for the incident?
                                <div className="Button-Container">
                                    <input type="radio" id="notInsured" name="isInsured" value="notinsured"
                                        checked={q1 === "notinsured"}
                                        onChange={(e) => question1Handle(e)}/>
                                    <label htmlFor="notInsured">Yes</label>
                                    <input type="radio" id="Insured" name="isInsured" value="insured"
                                        checked={q1 === "insured"}
                                        onChange={(e) => question1Handle(e)}/>
                                    <label htmlFor="Insured">No</label>
                                    <input type="radio" id="notInsured" name="isInsured" value="notinsured"
                                        checked={q1 === "notinsured"}
                                        onChange={(e) => question1Handle(e)}/>
                                    <label htmlFor="notInsured">Unsure</label>
                                </div>
                                {q1 === "notinsured" &&
                                <div className="Claims-Contact">
                                    Please Call us on -<a href="tel:0345 122 3018">0345 122 3018</a>
                                </div>
                                }
                            </div>
                            {q1 === "insured" &&
                            <div className="Question-1">
                                Was the incident outside of the UK?
                                <div className="Button-Container">
                                    <input type="radio" id="existing" name="isExisting" value="existing"
                                        checked={q2 === "existing"}
                                        onChange={(e) => question2Handle(e)}/>
                                    <label htmlFor="existing">Yes</label>
                                    <input type="radio" id="notexisting" name="isExisting" value="notexisting"
                                        checked={q2 === "notexisting"}
                                        onChange={(e) => question2Handle(e)}/>
                                    <label htmlFor="notexisting">No</label>
                                </div>
                                {q2 === "existing" &&
                                <div className="Claims-Contact">
                                    Please Call us on -<a href="tel:0345 122 3018">0345 122 3018</a>
                                </div>
                                }
                            </div>
                            }
                            {q2 === "notexisting" &&
                            <div className="Question-1">
                                Was anybody injured as a result of the incident or did it involve a pedestrain, a pedal cyclist or a motor cyclist?
                                <div className="Button-Container">
                                    <input type="radio" id="glass" name="isGlass" value="glass"
                                        checked={q3 === "glass"}
                                        onChange={(e) => question3Handle(e)}/>
                                    <label htmlFor="glass">Yes</label>
                                    <input type="radio" id="notglass" name="isGlass" value="notglass"
                                        checked={q3 === "notglass"}
                                        onChange={(e) => question3Handle(e)}/>
                                    <label htmlFor="notglass">No</label>
                                </div>
                                {q3 === "glass" &&
                                <div className="Claims-Contact">
                                    Please Call us on -<a href="tel:0345 165 0581">0345 165 0581</a>
                                </div>
                                }
                            </div>
                            }
                            {q3 === "notglass" &&
                            <div className="Question-1">
                                Were multiple vehicles involved in the incident (more than your vehicle and 1 other?)
                                <div className="Button-Container">
                                    <input type="radio" id="question4" name="isquestion4" value="question4"
                                        checked={q4 === "question4"}
                                        onChange={(e) => question4Handle(e)}/>
                                    <label htmlFor="question4">Yes</label>

                                    <input type="radio" id="question4glass" name="isquestion4glassGlass" value="question4glass"
                                        checked={q4 === "question4glass"}
                                        onChange={(e) => question4Handle(e)}/>
                                    <label htmlFor="question4glass">No</label>
                                </div>
                                {q4 === "question4" &&
                                <div className="Claims-Contact">
                                    Please Call us on -<a href="tel:0345 165 0581">0345 165 0581</a>
                                </div>
                                }
                            </div>
                            }
                            {q4 === "question4glass" &&
                            <div className="Question-1">
                                Did this incident involve an act of vandalism, malicious damage, fire or theft?
                                <div className="Button-Container">
                                    <input type="radio" id="question5" name="isquestion5" value="question5"
                                        checked={q5 === "question5"}
                                        onChange={(e) => question5Handle(e)}/>
                                    <label htmlFor="question5">Yes</label>

                                    <input type="radio" id="question5glass" name="isquestion5Glass" value="question5glass"
                                        checked={q5 === "question5glass"}
                                        onChange={(e) => question5Handle(e)}/>
                                    <label htmlFor="question5glass">No</label>
                                </div>
                                {q5 === "question5" &&
                                <div className="Claims-Contact">
                                    Please Call us on -<a href="tel:0345 165 0581">0345 165 0581</a>
                                </div>
                                }
                            </div>
                            }
                            {q5 === "question5glass" &&
                            <div className="Question-1">
                                Was any property (buildings, walls, lamp post etc) damaged as a result of this incident?
                                <div className="Button-Container">
                                    <input type="radio" id="question6" name="isquestion6" value="question6"
                                        checked={q6 === "question6"}
                                        onChange={(e) => question6Handle(e)}/>
                                    <label htmlFor="question6">Yes</label>

                                    <input type="radio" id="question6glass" name="isquestion6Glass" value="question6glass"
                                        checked={q6 === "question6glass"}
                                        onChange={(e) => question6Handle(e)}/>
                                    <label htmlFor="question6glass">No</label>
                                </div>
                                {q6 === "question6" &&
                                <div className="Claims-Contact">
                                    Please Call us on -<a href="tel:0345 165 0581">0345 165 0581</a>
                                </div>
                                }
                            </div>
                            }
                            {q6 === "question6glass" &&
                            <div className="Question-1">
                                Did this incident involve a head on collision or a collision on a roundabout?
                                <div className="Button-Container">
                                    <input type="radio" id="question7" name="isquestion7" value="question7"
                                        checked={q6 === "question7"}
                                        onChange={(e) => question7Handle(e)}/>
                                    <label htmlFor="question7">Yes</label>

                                    <input type="radio" id="question7glass" name="isquestion7Glass" value="question7glass"
                                        checked={q6 === "question7glass"}
                                        onChange={(e) => question7Handle(e)}/>
                                    <label htmlFor="question7glass">No</label>
                                </div>
                                {q7 === "question7" &&
                                <div className="Claims-Contact">
                                    Please Call us on -<a href="tel:0345 165 0581">0345 165 0581</a>
                                </div>
                                }
                            </div>
                            }
                            {q7 === "question7glass" &&
                            <div className="Question-1">
                                <input type="checkbox" id="questionquestion8glass" name="isquestion8Glass" value="question8glass" onChange={(e) => question8Handle(e)}
                                    />
                                {/* <label htmlFor="question7glass">No</label> */}
                                Please confirm that you will take care to answer all question honestly and to the best of your knowledge. Failure to do so may affect your claim.
                            </div>
                            }
                            {q8 === true && 
                                <div className="Claim-ContinueButton-Section">
                                    <input type="button" onClick={() => history.push('/login')} value="Continue" className="buttoncontinueStyle"/>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Claim
