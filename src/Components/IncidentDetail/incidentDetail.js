import React,{useState} from 'react';
import "./incidentDetail.css";
import LogoHeader from '../LogoHeader/LogoHeader';
import { connect } from 'react-redux';
import {GET_INCIDENT} from '../../Redux/actions';
import { useHistory } from 'react-router-dom';
import Stepper from './Stepper/Stepper';

function Incident(props){

    const dateList = ["DD",1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31];
    const monthList = ["MM",1,2,3,4,5,6,7,8,9,10,11,12];
    const yearList = ["YYYY",1990,1991,1992,1993,1994,1995,1996,1997,1998,1999,2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025,2026,2027,2028];
    const hourList =["H",1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24];
    const minuteList = ["M",1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60];

    const [date, setDate] =useState('');
    const [month, setMonth] =useState('');
    const [year, setYear] =useState('');
    const [hour, setHour] =useState('');
    const [minute, setMinute] =useState('');
    const [vehicleReg, setVehicleReg] = useState("");
    const [situation,setSituation] = useState("");
    const [street,setStreet] = useState("");
    const [town,setTown]=useState("");

    const questionHandle = (event) =>{
        setVehicleReg(event.target.value);
    }
    const history = useHistory();
    const continueHandle = () =>{
        if(date && month && year && hour && minute && vehicleReg && situation && street && town !== ""){
            let incident = {
                date:date,
                month:month,
                year:year,
                hour:hour,
                minute:minute,
                vehicleReg:vehicleReg,
                street:street,
                town:town,
                situation:situation
            }
            props.passData(incident);
            history.push('/contact');
            // history.push('/summary');
        }
    }
    return (
        <div className="Incident-Container">
            <LogoHeader/>
            <Stepper/>
            <div className="col-12">
                <div className="Section-2">
                    <div className="Section-2-Header">
                        Incident detail
                    </div>
                    <div className="Incident-Section-Body">
                        <div className="headingText">
                        Please tell us when the incident happened*
                        </div>
                        <div className="padding-vertical-5">
                            <label className="">Date of incident</label>
                            <div style={{width:"300px"}}>
                                <select id="dateList" name="dateList" className="Incident-Select" value={date} onChange={(e)=>setDate(e.target.value)}>
                                    {dateList.map(date =>
                                        <option value={date} key={date}>{date}</option >
                                    )}
                                    
                                </select>
                                <select id="monthList" name="monthList" className="Incident-Select" value={month} onChange={(e)=>setMonth(e.target.value)}>
                                    {monthList.map(date =>
                                        <option value={date} key={date}>{date}</option>
                                    )}
                                    
                                </select>
                                <select id="yearList" name="yearList" className="Incident-Select" value={year} onChange={(e)=>setYear(e.target.value)}>
                                    {yearList.map(date =>
                                        <option value={date} key={date}>{date}</option>
                                    )}
                                    
                                </select>
                            </div>
                        </div>
                        <div className="padding-vertical-5">
                            <label className="">Time of incident</label>
                            <div style={{width:"300px"}}>
                                <select id="hourList" name="hourList" className="Incident-Select" value={hour} onChange={(e)=>setHour(e.target.value)}>
                                    {hourList.map(date =>
                                        <option value={date} key={date}>{date}</option>
                                    )}
                                    
                                </select>
                                <select id="minuteList" name="minuteList" className="Incident-Select" value={minute} onChange={(e)=>setMinute(e.target.value)}>
                                    {minuteList.map(date =>
                                        <option value={date} key={date}>{date}</option>
                                    )}
                                    
                                </select>
                            </div>
                        </div>
                        <div className="headingText">
                            Please select your vehicle registration*
                            <div className="Button-Container" style={{"margin-left":" -2%"}}>
                                <input type="radio" id="existing" name="isExisting" value="A1" onChange={(e)=>questionHandle(e)}/>
                                <label htmlFor="existing" className="cardetail">A1</label>
                                <input type="radio" id="notexisting" name="isExisting" value="Other/Unknown" onChange={(e)=>questionHandle(e)}/>
                                <label htmlFor="notexisting" className="cardetail">Other/Unknown</label>
                            </div>
                        </div>
                        <div className="headingText">
                            Please tell us where the incident happened
                        </div>
                        <div>
                            <label className="labelTextIncident">Closest street to the incident</label>
                            <input placeholder="Street name" className="inputFieldCss" style={{"margin-left": "0px"}} value={street} onChange={(e)=>{setStreet(e.target.value)}}/>
                        </div>
                        <div>
                            <label className="labelTextIncident">Closest town to the incident</label>
                            <input placeholder="Town name" className="inputFieldCss" style={{"margin-left": "0px"}} value={town} onChange={(e)=>{setTown(e.target.value)}}/>
                        </div>
                        <div className="headingText">
                            Please tell us what happened (description that best fits the situation)*
                        </div>
                        <div>
                                <select id="cars" name="cars" className="optionDropDown" onChange={(e)=>setSituation(e.target.value)}>
                                    <option value="Please select a circumstance">Please select a circumstance...</option>
                                    <option value="Your vehicle was hit in the rear">Your vehicle was hit in the rear</option>
                                    <option value="A third party vehicle pulled out into the path of your vehicle">A third party vehicle pulled out into the path of your vehicle</option>
                                    <option value="Your vehicle was hit whilst parked">Your vehicle was hit whilst parked</option>
                                    <option value="A third party vehicle attempted to overtake your vehicle whilst turning">A third party vehicle attempted to overtake your vehicle whilst turning</option>
                                    <option value="A third party vehicle turned into the path of your vehicle">A third party vehicle turned into the path of your vehicle</option>
                                    <option value="An Incident involving only your vehicle">An Incident involving only your vehicle</option>
                                    <option value="A third party vehicle reversed into yours">A third party vehicle reversed into yours</option>
                                    <option value="A third party vehicle reversed into yours">None of the above</option>
                                </select>
                        </div>
                        <div className="ContinueButton-Section">
                            <input type="button" value="Continue" className="buttoncontinueStyle"
                            onClick={()=>continueHandle()}/>
                        </div>
                        {/* {props.latest} */}
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        state,
        latest: state.CarReducer.incident,
      };
}

const mapDispatchToProps = (dispatch)=>{
    return {
        passData:(incident) => {
            dispatch({type:GET_INCIDENT, payload:incident})
        }
      };
}

export default connect(mapStateToProps, mapDispatchToProps)(Incident);