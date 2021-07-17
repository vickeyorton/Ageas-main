import React,{useState} from 'react';
import './CarInfo.css';
import Section1Accordion from './Section1Accordion/Section1';
import Section3Accordion from './Section3Accordion/Section3';

function CarInfo() {
    const [q1,setq1] = useState("");
    const [q2,setq2] = useState("");
    const [q3,setq3] = useState("");
    const [q4,setq4] = useState("");


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


    return (
        <div className="row">
            <div className="col-lg-3 col-md-12 col-sm-12">
                <div className="Section-1">
                    <div className="Section-1-Header">
                        Had an accident or by the roadside?
                    </div>
                    <Section1Accordion/>
                </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12">
                <div className="Section-2">
                    <div className="Section-2-Header">
                        How to make a claim
                    </div>
                    <div className="Section-2-Body">
                        <div className="Question-1">
                            Is your vehicle insured with Ageas?
                            <div className="Button-Container">
                                <input type="radio" id="Insured" name="isInsured" value="insured"
                                checked={q1 === "insured"}
                                onChange={(e)=>question1Handle(e)}/>
                                <label for="Insured">Yes</label>

                                <input type="radio" id="notInsured" name="isInsured" value="notinsured" 
                                checked={q1 === "notinsured"} 
                                onChange={(e)=>question1Handle(e)}/>
                                <label for="notInsured">No</label>
                            </div>
                            {q1 === "notinsured" && 
                                <div className="Claims-Contact">
                                    Please Call our Claims team on -<a href="tel:0345 122 3018">0345 122 3018</a>
                                </div>
                            }
                        </div>
                        {q1 === "insured" && 
                            <div className="Question-1">
                                Is this related to Existing Claim?
                                <div className="Button-Container">
                                    <input type="radio" id="existing" name="isExisting" value="existing"
                                    checked={q2 === "existing"}
                                    onChange={(e)=>question2Handle(e)}/>
                                    <label for="existing">Yes</label>

                                    <input type="radio" id="notexisting" name="isExisting" value="notexisting" 
                                    checked={q2 === "notexisting"} 
                                    onChange={(e)=>question2Handle(e)}/>
                                    <label for="notexisting">No</label>
                                </div>
                                {q2 === "existing" && 
                                    <div className="Claims-Contact">
                                        Please Call our Claims team on -<a href="tel:0345 122 3018">0345 122 3018</a>
                                    </div>
                                }
                            </div>
                        }
                        {q2 === "notexisting" && 
                            <div className="Question-1">
                                Is this a windscreen or glass only Claim?
                                <div className="Button-Container">
                                    <input type="radio" id="glass" name="isGlass" value="glass"
                                    checked={q3 === "glass"}
                                    onChange={(e)=>question3Handle(e)}/>
                                    <label for="glass">Yes</label>

                                    <input type="radio" id="notglass" name="isGlass" value="notglass" 
                                    checked={q3 === "notglass"} 
                                    onChange={(e)=>question3Handle(e)}/>
                                    <label for="notglass">No</label>
                                </div>
                                {q3 === "glass" && 
                                    <div className="Claims-Contact">
                                        Please Call our glass line on -<a href="tel:0345 165 0581">0345 165 0581</a> or <a href="/claim">click here</a> to report online
                                    </div>
                                }
                            </div>
                        }
                        {q3 === "notglass" && 
                            <div className="Question-1">
                                Did you buy your policy directely from Ageas or via a broker?
                                <div className="Button-Container">
                                    <input type="radio" id="ageas" name="policy" value="ageas"
                                    checked={q4 === "ageas"}
                                    onChange={(e)=>question4Handle(e)}/>
                                    <label for="ageas">Ageas</label>

                                    <input type="radio" id="broker" name="policy" value="broker" 
                                    checked={q4 === "broker"} 
                                    onChange={(e)=>question4Handle(e)}/>
                                    <label for="broker">Broker</label>
                                </div>
                                {q4 === "ageas" ? 
                                    <div className="Policy-Condition">
                                        Report your incident
                                        <ul>
                                            <li>If you would prefer to speak to us over the phone pease call - <a href="tel:0345 125 2450">0345 125 2450</a></li>
                                            <li>If you want to tell us about your claim please <a href="/claim">click here</a></li>
                                        </ul>
                                    </div>

                                    :(q4 === 'broker') ?
                                        <div className="Policy-Condition">
                                            Report your incident
                                            <ul>
                                                <li>If someone was injured in the incident or you would prefer to speak to us over the phone pease call - <a href="tel:0345 122 3018">0345 122 3018</a></li>
                                                <li>If you have a fleet or motor trade policy please call - <a href="tel:0345 122 3018">0345 122 3018</a></li>
                                                <li>If you want to tell us about your claim please <a href="/claim">click here</a></li>
                                            </ul>
                                        </div>

                                    :""
                                }
                            </div>
                        }
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-12 col-sm-12">
                <div className="Section-1">
                    <div className="Section-1-Header">
                        FAQ
                    </div>
                    <Section3Accordion/>
                </div>
            </div>
        </div>
    )
}

export default CarInfo
