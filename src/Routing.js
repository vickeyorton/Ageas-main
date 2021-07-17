import React from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Home from './Components/Home/Home';
import Claim from './Components/ClaimPage/Claim';
import Question from './Components/QuestionPage/Question';
import Login from './Components/Login/Login';
import incident from "./Components/IncidentDetail/incidentDetail";
import contact from "./Components/ContactDetail/Contactdetails";
import involved from "./Components/InvolvedPartydetails/InvolvedPartyDetails";
import thankyou from "./Components/Thankyou/Thankyou"

function Routing() {
    return (
        <div>
            <BrowserRouter>
                <div>
                    <Switch>
                        <Route path="/" exact component={Home}/>
                        <Route path="/claim" exact component={Claim}/>
                        <Route path="/question" exact component={Question}/>
                        <Route path="/login" exact component={Login}/>
                        <Route path="/incident" exact component={incident}/>
                        <Route path="/contact" exact component={contact}/>
                        <Route path="/involved" exact component={involved}/>
                        <Route path="/thankyou" exact component={thankyou}/>
                    </Switch>
                </div>
            </BrowserRouter>
        </div>
    )
}

export default Routing
