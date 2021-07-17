import React,{useState} from 'react';
import './InsuranceTab.css';
import CarInfo from '../CarInfo/CarInfo';


function InsuranceTab() {
    const [selectedInsurance,setSelectedInsurance] = useState("");

    const Tab = [
        {   
    pic:"https://www.ageas.co.uk/globalassets/assets/icons/70x70/car_insurance.png",
    active:"https://www.ageas.co.uk/globalassets/assets/icons/70x70/car_insurance_inverted.png",
    name:"Car Insurance",
    component:"Car"
        },
    {   
    pic:"https://www.ageas.co.uk/globalassets/assets/icons/70x70/home_insurance.png",
    active:"https://www.ageas.co.uk/globalassets/assets/icons/70x70/home_insurance_inverted.png",
    name:"Home Insurance",
    component:"Home"   
        },
    {   
    pic:"https://www.ageas.co.uk/globalassets/assets/icons/70x70/ageas_icons_master_v2_pet_line_option1.png",
    active:"https://www.ageas.co.uk/globalassets/assets/icons/70x70/ageas_icons_master_v2_pet_line_white.png",
    name:"Pet Insurance",
    component:"Pet"   
        },
    {   
    pic:"https://www.ageas.co.uk/globalassets/assets/icons/70x70/business_insurance.png",
    active:"https://www.ageas.co.uk/globalassets/assets/icons/70x70/business_insurance_inverted.png",
    name:"Business Insurance",
    component:"Business"   
        },
    {   
    pic:"https://www.ageas.co.uk/globalassets/assets/icons/70x70/travel_icon_70x70_purple.png",
    active:"https://www.ageas.co.uk/globalassets/assets/icons/70x70/travel_icon_70x70_white.png",
    name:"Travel Insurance",
    component:"Travel"   
        },
    {   
    pic:"https://www.ageas.co.uk/globalassets/assets/icons/70x70/bike_insurance.png",
    active:"https://www.ageas.co.uk/globalassets/assets/icons/70x70/bike_insurance_inverted.png",
    name:"Motorcycle Insurance",
    component:"Motorcycle"   
        },
    {   
    pic:"https://www.ageas.co.uk/globalassets/assets/icons/70x70/ageas_icons_master_v2_security_insurance_line.png",
    active:"https://www.ageas.co.uk/globalassets/assets/icons/70x70/ageas_icons_master_v2_security_insurance_white.png",
    name:"Other Products",
    component:"Other"   
        },
    ];

    const tabClick = (e) =>{
        e.stopPropagation();
        let card = document.querySelectorAll(".Tab-Card");
        let darkLogo = document.querySelectorAll(".Tab-Logo-dark");
        let liteLogo = document.querySelectorAll(".Tab-Logo-lite");
        let insurance = document.querySelectorAll(".Insurance-Section");
        card.forEach((element,index) => {card[index].classList.remove("active")} );
        darkLogo.forEach((element,index) => {darkLogo[index].classList.remove("hide")} );
        liteLogo.forEach((element,index) => {liteLogo[index].classList.add("hide")} );
        insurance.forEach((element,index)=> {insurance[index].classList.remove("active")})
        if(e.target.className === "Tab-Card"){
            e.target.classList.add("active");
            let hide = e.target.querySelectorAll(".Tab-Logo-dark")[0];
            hide.classList.add('hide');
            let remove = e.target.querySelectorAll(".Tab-Logo-lite")[0];
            remove.classList.remove('hide');
            // Displaying Related Content
            let section = e.target.getAttribute("name");
            let content = document.querySelectorAll(`.${section}-Section`)[0];
            content.classList.add("active");
            setSelectedInsurance(section);
        }else{
            
            e.target.offsetParent.classList.add("active");
            let remove = e.target.offsetParent.querySelectorAll(".Tab-Logo-lite")[0];
            remove.classList.remove('hide');
            // Displaying Related Content
            let section = e.target.offsetParent.getAttribute("name");
            let content = document.querySelectorAll(`.${section}-Section`)[0];
            content.classList.add("active");
            setSelectedInsurance(section);

            let hide = e.target.offsetParent.querySelectorAll(".Tab-Logo-dark")[0];
            hide.classList.add('hide');
        }
    }

    return (
        <div className="">
            <div className="Tab-Choice">
                <div className="Tab-Container">
                    {Tab.map((value,index) => {
                        return(
                            <div className="Tab-Card" name={value.component} key={index} onClick={(e)=>tabClick(e)}>
                                <div className="Tab-Card-Content">
                                    <div className="Tab-Card-Logo">
                                        <img src={value.pic} alt={value.name} className="Tab-Logo-dark"/>
                                        <img src={value.active} alt={value.name} className="Tab-Logo-lite hide"/>
                                    </div>
                                    <div className="Tab-Card-Text">
                                        {value.name}
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className={selectedInsurance && "Reference-Block"}>
                <div className="Reference-Block-Container">
                    <div className="Insurance-Section Car-Section">
                        <CarInfo/>
                    </div>
                    <div className="Insurance-Section Home-Section">
                        <CarInfo/>
                    </div>
                    <div className="Insurance-Section Pet-Section">
                        <CarInfo/>
                    </div>
                    <div className="Insurance-Section Business-Section">
                        <CarInfo/>
                    </div>
                    <div className="Insurance-Section Travel-Section">
                        <CarInfo/>
                    </div>
                    <div className="Insurance-Section Motorcycle-Section">
                        <CarInfo/>
                    </div>
                    <div className="Insurance-Section Other-Section">
                        <CarInfo/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InsuranceTab
