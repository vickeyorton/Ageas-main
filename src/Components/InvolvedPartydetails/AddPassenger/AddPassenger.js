import React, { useState } from "react";
import "./AddPassenger.css";
import { connect } from "react-redux";
import { useHistory,Link } from "react-router-dom";
import { GET_PASSENGERS } from "../../../Redux/actions";

function AddPassenger(props) {
  const [title, setTitle] = useState("Mr");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [hno, setHno] = useState("");
  const [addL1, setAddL1] = useState("");
  const [addL2, setAddL2] = useState("");
  const [addL3, setAddL3] = useState("");
  const [addL4, setAddL4] = useState("");
  const [postcode, setPostcode] = useState("");
  const [hpNo, setHpNo] = useState("");
  const [moNo, setMoNo] = useState("");
  const [email, setEmail] = useState("");
  const [resObj, setResObj] = useState({});

  const history = useHistory();
  const onSubmit = () => {
    const resObj = {
      title: title,
      firstName: firstName,
      lastName: lastName,
      HouseNo: hno,
      addressLane1: addL1,
      addressLane2: addL2,
      addressLane3: addL3,
      addressLane4: addL4,
      postcode: postcode,
      HousePhone: hpNo,
      MobilePhone: moNo,
      Email: email,
    };
    props.passData(resObj);
    history.push("/involved");
  };
  return (
    <div className="AddPassenger">
      <div className="row">
        <div className="col-lg-6 col-md-12 col-sm-12">
          <div className="Section-2">
            <div className="Section-2-Header">Add passenger (your vechile)</div>
            <div className="form-section">
              <div className="inputs">
                <lable>Title</lable>
                <br />
                <select
                  id=""
                  name=""
                  className="optionDropDown"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                >
                  <option value="Mr">Mr</option>
                  <option value="Mrs">Mrs</option>
                </select>
              </div>
              <div className="inputs">
                <label>First Name</label>
                <br />
                <input
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
              <div className="inputs">
                <label>Last Name</label>
                <br />
                <input
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
              <div className="inputs">
                <label>House number or name</label>
                <br />
                <input
                  type="text"
                  value={hno}
                  onChange={(e) => setHno(e.target.value)}
                />
              </div>
              <div className="inputs">
                <label>Address Line 1</label>
                <br />
                <input
                  type="text"
                  value={addL1}
                  onChange={(e) => setAddL1(e.target.value)}
                />
              </div>
              <div className="inputs">
                <label>Address Line 2</label>
                <br />
                <input
                  type="text"
                  value={addL2}
                  onChange={(e) => setAddL2(e.target.value)}
                />
              </div>
              <div className="inputs">
                <label>Address Line 3</label>
                <br />
                <input
                  type="text"
                  value={addL3}
                  onChange={(e) => setAddL3(e.target.value)}
                />
              </div>
              <div className="inputs">
                <label>Address Line 3</label>
                <br />
                <input
                  type="text"
                  value={addL4}
                  onChange={(e) => setAddL4(e.target.value)}
                />
              </div>
              <div className="inputs">
                <label>Postcode</label>
                <br />
                <input
                  type="text"
                  value={postcode}
                  onChange={(e) => setPostcode(e.target.value)}
                />
              </div>
              <div className="inputs">
                <label>Home telephone number</label>
                <br />
                <input
                  type="text"
                  value={hpNo}
                  onChange={(e) => setHpNo(e.target.value)}
                />
              </div>
              <div className="inputs">
                <label>Mobile telephone number</label>
                <br />
                <input
                  type="text"
                  value={moNo}
                  onChange={(e) => setMoNo(e.target.value)}
                />
              </div>
              <div className="inputs">
                <label>Email Address</label>
                <br />
                <input
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div
                className="Button-Container"
                style={{ "margin-left": " -2%" }}
              >
                <label onClick={() => onSubmit()}>Save</label>

                <Link to="/involved"><label>Cancel</label></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
const mapDispatchToProps = (dispatch) => {
  return {
    passData: (resObj) => {
      dispatch({ type: GET_PASSENGERS, payload: resObj });
    },
  };
};

export default connect(null, mapDispatchToProps)(AddPassenger);
