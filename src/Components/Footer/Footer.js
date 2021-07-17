import React from 'react';
import "./Footer.css";

function Footer() {
    const accordionActions = (e) =>{
        const element = e.target.nextSibling;
        let style = window.getComputedStyle(element);
        let display = style.getPropertyValue('display');
        if(display === "none"){
            e.target.nextSibling.style.display="block";
        }else{
            e.target.nextSibling.style.display = "none";
        }
    }

    return (
        <div className="Footer-Page">
            <div className="Footer-Page-Container">
                <div className="Footer-Section">
                    {/* <div className="Footer-Nav-Wrap"> */}
                        <div className="Nav-Container">
                            <div className="Nav-Container-Heading" onClick={(e)=>accordionActions(e)}>About us</div>
                            <ul className="footer-nav__list js-footer-nav-content">
                                <li className="footer-nav__item">
                                    <a className="footer-nav__link" href="https://www.ageas.co.uk/about-ageas/who-we-are/">
                                        Who we are
                                    </a>
                                </li>
                                <li className="footer-nav__item">
                                    <a className="footer-nav__link" href="https://www.ageas.co.uk/about-ageas/our-executive-team/">
                                        Our executive team
                                    </a>
                                </li>
                                <li className="footer-nav__item">
                                    <a className="footer-nav__link" href="https://www.ageas.co.uk/about-ageas/our-heritage/" title="Our heritage ">
                                        Our heritage
                                    </a>
                                </li>
                                <li className="footer-nav__item">
                                    <a className="footer-nav__link" href="https://www.ageas.co.uk/newsroom/">
                                        Newsroom
                                    </a>
                                </li>
                                <li className="footer-nav__item">
                                    <a className="footer-nav__link" href="https://www.ageas.co.uk/careers/">
                                        Careers
                                    </a>
                                </li>
                                <li className="footer-nav__item">
                                    <a className="footer-nav__link" href="https://www.ageas.com/" title="Ageas Group">
                                        Ageas Group
                                    </a>
                                </li>
                                <li className="footer-nav__item">
                                    <a className="footer-nav__link" href="https://www.ageasbowl.com/" title="Ageas Bowl">
                                        Ageas Bowl
                                    </a>
                                </li>
                                <li className="footer-nav__item">
                                    <a className="footer-nav__link" href="https://www.ageasbroker.co.uk/" title="Ageas Brokers">
                                        Ageas Brokers
                                    </a>
                                </li>
                                <li className="footer-nav__item">
                                    <a className="footer-nav__link" href="https://www.ageas.co.uk/important-information/">
                                        Important information
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="Nav-Container">
                            <div className="Nav-Container-Heading" onClick={(e)=>accordionActions(e)}>Useful links</div>
                            <ul className="footer-nav__list js-footer-nav-content">
                                <li className="footer-nav__item">
                                    <a className="footer-nav__link" href="https://www.ageas.co.uk/policy-documents/">
                                        Policy documents
                                    </a>
                                </li>
                                <li className="footer-nav__item">
                                    <a className="footer-nav__link" href="https://www.ageas.co.uk/contact-us/">
                                        Contact us
                                    </a>
                                </li>
                                <li className="footer-nav__item">
                                    <a className="footer-nav__link" href="https://www.ageas.co.uk/make-a-claim/">
                                        Make a claim
                                    </a>
                                </li>
                                <li className="footer-nav__item">
                                    <a className="footer-nav__link" href="https://www.ageas.co.uk/make-a-complaint/">
                                        Make a complaint
                                    </a>
                                </li>
                                <li className="footer-nav__item">
                                    <a className="footer-nav__link" href="https://www.ageas.co.uk/existing-customers/no-claims-discount/">
                                        No Claims Discount
                                    </a>
                                </li>
                                <li className="footer-nav__item">
                                    <a className="footer-nav__link" href="https://www.ageas.co.uk/make-a-claim/no-claims-discount/">
                                        No Claims Discount via a Broker
                                    </a>
                                </li>
                                <li className="footer-nav__item">
                                    <a className="footer-nav__link" href="https://www.ageas.co.uk/terms-and-conditions/">
                                        Terms and conditions
                                    </a>
                                </li>
                                <li className="footer-nav__item">
                                    <a className="footer-nav__link" href="https://www.ageas.co.uk/terms-of-business/">
                                        Terms of business
                                    </a>
                                </li>
                                <li className="footer-nav__item">
                                    <a className="footer-nav__link" href="https://www.ageas.co.uk/privacy-policies/">
                                        Privacy policies
                                    </a>
                                </li>
                                <li className="footer-nav__item">
                                    <a className="footer-nav__link" href="https://www.ageas.co.uk/cookies/">
                                        Cookies
                                    </a>
                                </li>
                                <li className="footer-nav__item">
                                    <a className="footer-nav__link" href="https://www.ageas.co.uk/accessibility/">
                                        Accessibility
                                    </a>
                                </li>
                                <li className="footer-nav__item">
                                    <a className="footer-nav__link" href="https://www.ageas.co.uk/important-information/modern-slavery-statement/" title="Modern slavery statement">
                                        Modern slavery statement
                                    </a>
                                </li>
                            </ul>
                        </div>
                    {/* </div> */}
                    <div className="Footer-Legal-Wrap">
                        <div className="Nav-Container-Heading" onClick={(e)=>accordionActions(e)}>The legal bit...</div>
                        <div className="footer-legal__content js-footer-nav-content">
                            <address className="footer-legal__address">
                                <p>Registered office: <br/>Ageas House, <br/>Hampshire Corporate Park, <br/>Templars Way,<br/>Eastleigh, <br/>Hampshire, <br/>SO53 3YA.</p>
                            </address>
                            <div className="footer-legal__registered">
							    <p>ageas is a trading name of Ageas Retail Limited (Company Reg. No. 1324965) and Ageas Insurance Limited (Company Reg. No. 354568). Registered in England and Wales. Registered office: Ageas House, Hampshire Corporate Park, Eastleigh, Hampshire, SO53 3YA. ageas car and home insurance are arranged and administered by Ageas Retail Limited and underwritten by Ageas Insurance Limited, who also provide the claims service. ageas pet insurance is arranged and administered by Ageas Retail Limited. Ageas Retail Limited is authorised and regulated by the Financial Conduct Authority, Financial Services Register No. 312468. Ageas Insurance Limited is authorised by the Prudential Regulation Authority and regulated by the Financial Conduct Authority and the Prudential Regulation Authority, Financial Services Register No. 202039.</p>
						    </div>
                            <div className="footer-lega__vat">
							    <p><span>&nbsp;</span></p>
						    </div>
					    </div>
					    <a href="/" title="Ageas logo" className="footer-logo-link">
						    <img data-src="https://www.ageas.co.uk/Static/images/png/ageas-footer-logo.png" className="footer-logo ls-is-cached lazyloaded" alt="Ageas" src="https://www.ageas.co.uk/Static/images/png/ageas-footer-logo.png"/>
					    </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
