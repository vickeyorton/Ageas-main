import React from 'react';
import { useHistory } from 'react-router-dom';
import LogoHeader from '../LogoHeader/LogoHeader';
import './Login.css'

function Login() {
    const history = useHistory();
    return (
        <div className="Login-Container">
            <LogoHeader/>
            <div className="col-12">
                <div className="Section-2">
                    <div className="Section-2-Header">
                        Log in
                    </div>
                    <div className="Login-Section-Body">
                        <div className="Login-Section">
                            <div className="textContainer">
                                <p className="">
                                Welcome to your Ageas Online Account - where you can manage your policy, keep everything up to date and view your policy documents.
                                </p>
                            </div>
                            <div>
                            <div className="textContainer">
                                <p className="">
                                (If you bought through an intermediary, such as a broker, Please contact them. If you bought directly from Ageas - either on our website or through a
                                price comparison website - please continue below)
                                </p>
                            </div>
                            </div>
                            <div className="labelText">
                                Username
                            </div>
                            <div className="inputTextDetail">
                                (This is your email address)
                                <span className="forgetText">
                                    Forgotten Username
                                </span>
                            </div>
                            <input className="Login-inputFieldCss"/>
                            <div className="labelText">
                                Password
                            </div>
                            <div className="inputTextDetail">
                                (Minimum of 8 characters including 1 number)
                                <span className="forgetText">
                                    Forgotten Password
                                </span>
                            </div>
                            <input type="password" className="Login-inputFieldCss"/>
                            <div>
                                <input type="button"
                                value="Show Password"
                                className = "ButtonStylePassword"
                                
                                />
                            </div>
                            <div className="Button-Center">
                                <input type="button"
                                value="Log In"
                                className = "loginButton"
                                onClick={() => history.push('/incident')}
                                />
                            </div>
                            <br/>
                            <input type="checkbox" />
                            <span>Remember me</span>
                            <div className="">
                                <p className="Login-Final-Para">
                                    If you don't have an account with us, it's really easy to set up - just click below to register.
                                </p>
                            </div>
                            <div className="Button-Center">
                                <input type="button"
                                    value="Register"
                                    className = "RegisterButton"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login