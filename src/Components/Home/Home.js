import React from 'react';
import './Home.css';
import InsuranceTab from './InsuranceTab/InsuranceTab';


function Home() {
    return (
        <div className="">
            <div className="Home-Page">
                <div className="Home-Page-Container">
                    <div className="Home-Page-Header">Goodbye exhausting claims</div>
                    <div className="Home-Page-ParaContainer">
                        <p className="Home-Page-Para">Whether you bought your insurance with Ageas or through an intermediary such as a broker, get in touch using the details below and we’ll get the ball rolling right away.</p>
                    </div>
                </div>
            </div>
            <InsuranceTab/>
        </div>
    )
}

export default Home
