import React, { useState, useEffect } from "react";
import "./InvolvedPartyDetails.css";
import { connect } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { GET_INVOLVED } from "../../Redux/actions";
import Stepper from './Stepper/Stepper';
import LogoHeader from '../LogoHeader/LogoHeader';
// import CarInfo from "../Home/CarInfo/CarInfo";
// import login from "../Login/Login.css";
// import "../IncidentDetail/incidentDetail.css";

function InvolvedPartyDetails(props) {
  const [val, setVal] = useState(1);
  const [namesArray, setNamesArray] = useState([]);
  const handleChange = (e) => setVal(e.target.value);
  const resObj = props.addPassenger;

  useEffect(() => {
    let arr = [];

    console.log(val);

    for (let i = 0; i < val; i++) {
      arr.push(i);
    }

    setNamesArray(arr);
    console.log(namesArray, "namesArray");
    console.log(arr, "arr");
  }, [val]);

  const deleteItem = (index) => {
    const updatedArray = namesArray.filter((elem, index2) => {
      return index2 != index;
    });
    setNamesArray(updatedArray);
  };
  const history = useHistory();
  const onContinue = () => {
    const invObj = { val: val };
    props.passData(invObj);
    history.push("/summary");
  };
  const onEdit = ()=>{
    history.push("/addpassenger");
  }
  return (
    <div className="row2">
      <LogoHeader/>
      <Stepper />
      <div className="col-md-12 col-sm-12">
        <div className="Section-2">
          <div className="Section-2-Header">Involved parties detail</div>
          <div className="Section-2-Body">
            <div className="headingText">
              <strong>Your Vehicle</strong>
            </div>
            <div>
              <label className="labelTextIncident">
                The vehicle on this policy is: <strong>A1</strong>
              </label>
            </div>
            <br />
            <div>
              <label className="labelTextIncident">
                How many passengers were in your vehicle?
              </label>
              <br />
              <label
                className="labelTextIncident"
                style={{ "font-size": "10px" }}
              >
                If there were more than 5 passengers in your vehicle.please call
                :<a href="tel:0345 122 3018">0345 122 3018</a>
              </label>
            </div>
            <div className="contentdropdown">
              <select
                id="cars"
                name="cars"
                className="optionDropDown"
                value={val}
                onChange={handleChange}
              >
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </div>
            <div
              className="Passengers-details-box"
              style={{ "font-size": "14px" }}
            >
              Please enter the details of your passengers where known
              {namesArray &&
                namesArray.map((index) => (
                  <div key={index} className="Involved-Passenger-box">
                    <div>
                      {resObj?resObj.firstName:"User Name"}
                    </div>
                    <div className="Passenger-buttons">
                      
                        
                        <input
                          type="button"
                          value="Edit"
                          className="pass-button"
                          onClick={()=>{onEdit(index)}}
                        />
                      
                    
                        <input
                          type="button"
                          value="Clear"
                          className="pass-button"
                          onClick={() => {
                            deleteItem(index);
                          }}
                        />
                    </div>
                  </div>
                ))}
            </div>
            <hr />
            <div className="headingText">
              <strong>Their Vehicle</strong>
            </div>
            <div className="">
              Was there another vehicle involved?
              <div
                className="Button-Container"
                style={{ "margin-left": " -2%" }}
              >
                <input
                  type="radio"
                  id="existing"
                  name="isExisting"
                  value="existing"
                />
                <label htmlFor="existing">Yes</label>
                <input
                  type="radio"
                  id="notexisting"
                  name="isExisting"
                  value="notexisting"
                />
                <label htmlFor="notexisting">No</label>
              </div>
            </div>
            <div className="Bottom-buttons">
              <Link to="/contact">
                {" "}
                <input type="button" value="Back" className="buttonBackStyle" />
              </Link>
              
                <input
                onClick={() => onContinue()}
                  type="button"
                  value="Continue"
                  className="buttoncontinueStyle"
                />
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    state,
    addPassenger: state.CarReducer.resObj,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    passData: (invObj) => {
      dispatch({ type: GET_INVOLVED, payload: invObj });
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InvolvedPartyDetails);
