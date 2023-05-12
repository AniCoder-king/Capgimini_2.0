
import './ContactUs/CSS/ContactUs.css'

import { Link } from 'react-router-dom';


const ContactUs = () => {
    return (
        <div>
            {/* 1st Component */}
            <div className='contact_img_container'>
                <img style={{ position: 'relative', zIndex: '-2' }} src="https://source.unsplash.com/1400x400/?city-day" className="d-block w-100" alt="..." />
                <div style={{ zIndex: '-1' }} className='contact_img_overlay'>
                    <h1>Contact Us</h1>
                </div>
            </div>

            {/* 2nd Component */}
            <div className="contact_text_cm">
                <div className="row featurette d-flex justify-content-center align-items-center">
                    <div>
                        <h1 style={{ fontWeight: '450' }} className="featurette-heading">Thank you for your interest in Capgemini. Whether you’re a client, job seeker, journalist, analyst or investor, you can find the best way to contact us below. </h1>
                        <h2>Global contacts details</h2>

                        <div className="subGlobalContact">
                            <p style={{ marginBottom: "20px", fontSize: "23px" }}>Head Office</p>
                            <p>Head Office, Capgemini Service, Place de l’Étoile, 11 rue de Tilsitt, 75017 Paris, France</p>
                            <p>T. +33 1 47 54 50 00 <br />
                                F. +33 1 47 54 50 25</p>

                            <div className="subGlobalContactHead">
                                <div>
                                    <span className="box-read-more-btn">
                                        <Link className="contactButton" to='/'>
                                            Head Office on Google Maps <span>&#8594;</span>
                                        </Link>
                                    </span>
                                    {" "}
                                </div>

                                <div className="subGlobalContactMarginLeft">
                                    <span className="box-read-more-btn">
                                        <Link className="contactButton" to='/'>
                                            Find a location near you <span>&#8594;</span>
                                        </Link>
                                    </span>
                                    {" "}
                                </div>
                            </div>
                        </div>


                        <div className="subGlobalContact">
                            <p style={{ marginBottom: "20px", fontSize: "23px" }}>Job seekers</p>
                            <p>Our global website provides an overview of careers at Capgemini. Our country websites provide a more localised view on career opportunities.</p>

                            <div style={{ display: 'flex', marginTop: '25px' }}>
                                <div>
                                    <span className="box-read-more-btn">
                                        <Link className="contactButton" to='/'>
                                            Visit out global careers page <span>&#8594;</span>
                                        </Link>
                                    </span>
                                    {" "}
                                </div>
                            </div>
                        </div>


                        <div className="subGlobalContact">
                            <p style={{ marginBottom: "20px", fontSize: "23px" }}>Clients</p>
                            <p>Find out more on how we can help you to get the future you want in through our industry expertise, services, and technology partners.</p>

                            <div className="subGlobalContactClient">
                                <div>
                                    <span className="box-read-more-btn">
                                        <Link className="contactButton" to='/'>
                                            Our industries <span>&#8594;</span>
                                        </Link>
                                    </span>
                                    {" "}
                                </div>
                                <div className="subGlobalContactMarginLeft">
                                    <span className="box-read-more-btn">
                                        <Link className="contactButton" to='/'>
                                            Our services <span>&#8594;</span>
                                        </Link>
                                    </span>
                                    {" "}
                                </div>
                                <div className="subGlobalContactMarginLeft">
                                    <span className="box-read-more-btn">
                                        <Link className="contactButton" to='/'>
                                            Our partners <span>&#8594;</span>
                                        </Link>
                                    </span>
                                    {" "}
                                </div>
                            </div>
                        </div>

                        <div className="subGlobalContact">
                            <p style={{ marginBottom: "20px", fontSize: "23px" }}>Investors</p>
                            <p>Our Investor Relations site provides investor information, regulated news, and contact details in a dedicated site.</p>

                            <div style={{ display: 'flex', marginTop: '25px' }}>
                                <div>
                                    <span className="box-read-more-btn">
                                        <Link className="contactButton" to='/' style={{ maxWidth: '20rem' }}>
                                            Visit our investor Relations site <span>&#8594;</span>
                                        </Link>
                                    </span>
                                    {" "}
                                </div>
                            </div>
                        </div>

                        <div className="subGlobalContact">
                            <p style={{ marginBottom: "20px", fontSize: "23px" }}>Media</p>
                            <p>Our Global Press Office is available for all media enquiries. For local enquiries please contact the local press team.</p>

                            <div style={{ display: 'flex', marginTop: '25px' }}>
                                <div>
                                    <span className="box-read-more-btn">
                                        <Link className="contactButton" to='/'>
                                            Visit the newsroom <span>&#8594;</span>
                                        </Link>
                                    </span>
                                    {" "}
                                </div>
                            </div>
                        </div>


                        {/* Last subGlobalPart */}
                        <div className="subGlobalContact" style={{ marginTop: '110px' }}>
                            <p style={{ marginBottom: "20px", fontSize: "23px" }}>Market analysts</p>
                            <p>Our Market Analyst Relations team provides a single point of contact for market analysts. If you are an analyst and need information on Capgemini’s services and industry experience, or would like to schedule a briefing with one of our experts, the Analyst Relations team is here to help.</p>

                            <div style={{ display: 'flex', marginTop: '25px' }}>
                                <div>
                                    <span className="box-read-more-btn">
                                        <Link className="contactButton" to='/' style={{ maxWidth: '25rem' }}>
                                            See latest industry reports and recognition <span>&#8594;</span>
                                        </Link>
                                    </span>
                                    {" "}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 3rd Component */}
            <div className="contactUsEnquries">
                <div>
                    <h2>Other enquries</h2>
                    <p>For all other enquiries, please complete this form and one of the team will be in touch.</p>
                </div>
                <div>
                    <span className="box-read-more-btn">
                        <Link className="contactButton specialContactButton" to='/' style={{ maxWidth: '25rem' }}>
                            Get in touch <span>&#8594;</span>
                        </Link>
                    </span>
                    {" "}
                </div>
            </div>
        </div >
    )
}

export default ContactUs
