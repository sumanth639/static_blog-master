/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import '../style/footerStyle.css'

const Footer = () => {
    return (
        <section>
            <footer className="text-center text-lg-start text-white mt-10" style={{ backgroundColor: '#000000', marginTop: '25px' }}>
                <div className='container'>
                    <div className="p-4 pb-0">
                        <section>
                            <div className="row">
                                <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                                    <h4 id='hovId' className="mb-4 font-weight-bold" style={{ color: 'rgb(187,157, 69)', fontStyle: 'italic' }}>About Us</h4>
                                    <p >We are an AMFI registered Mutual Funds Distributor engaged in distribution of Equity, Debt, Hybrid, Sector and Thematic Mutual Funds. We also provid  services with respect to various secondary Bonds, Equity trading, NCDs, Life and Health Insurance, Corporate FDs and Estate Planning solutions etc.</p>
                                    <br />
                                    <p> AMFI Registered Mutual Funds Distributor (ARN 109866)</p>
                                </div>
                                <hr className="w-100 clearfix d-md-none" id='lineFix' />
                                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3" >
                                    <h4 id='hovId' className="mb-4 font-weight-bold" style={{ color: 'rgb(187,157, 69)', fontStyle: 'italic' }}>Products</h4>
                                    <p><a href='https://www.ascentwealth.in/' className="text-white" style={{ textDecoration: 'none' }}>Mutual Funds</a></p>
                                    <p><a href='https://www.ascentwealth.in/' className="text-white" style={{ textDecoration: 'none' }}>Life and Health Insurance</a></p>
                                    <p><a href='https://www.ascentwealth.in/' className="text-white" style={{ textDecoration: 'none' }}>Corporate FDs, Bonds and NCDs</a></p>
                                    <p><a href='https://www.ascentwealth.in/' className="text-white" style={{ textDecoration: 'none' }}>Estate Planning</a></p>
                                    <p><a href='https://www.ascentwealth.in/' className="text-white" style={{ textDecoration: 'none' }}>Equity - De-mat Accounts</a></p>
                                    <p><a href='https://www.ascentwealth.in/' className="text-white" style={{ textDecoration: 'none' }}>Goal Based Financial Planning</a></p>
                                </div>
                                <hr className="w-100 clearfix d-md-none" id='lineFix' />
                                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                                    <h4 id='hovId' className="mb-4 font-weight-bold" style={{ color: 'rgb(187,157, 69)', fontStyle: 'italic' }}>Contact</h4>
                                    <p style={{ marginBottom: '25px' }}><img style={{ marginBottom: '5px' }} width={'30px'} height={'30px'} src='https://images.anchoredgetechno.com/images/phone4.png' /> :- +91-7305953668</p>
                                    <p style={{ marginBottom: '25px', marginTop: '25px' }}><img style={{ marginBottom: '5px' }} width={'30px'} height={'30px'} src='https://images.anchoredgetechno.com/images/email4.png' /> :- ascentwealth.invest@gmail.com</p>
                                    <p style={{ marginTop: '25px' }}><img style={{ marginBottom: '8px' }} width={'30px'} height={'30px'} src='https://images.anchoredgetechno.com/images/location4.png' /> :- Thoraipakkam, Chennai,<br />Tamilnadu - 600097, India</p>
                                </div>
                                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                                    <h4 id='hovId' className="mb-4 font-weight-bold" style={{ color: 'rgb(187,157, 69)', fontStyle: 'italic' }}>Follow us</h4>
                                    <div className='container' style={{marginTop:'15px', padding:'10px'}}>
                                        <a style={{ marginBottom: '9px', marginRight:'10px' }} href="https://www.facebook.com/ascentwealth.mf" target='_blank' id='upBarNav' rel="noreferrer">
                                            <img src="https://www.ascentwealth.in/Content/ascentwealth.in/UploadedImage/RealImage/461facebook5.png" alt="Facebook" width={'25px'} height={'25px'} />
                                        </a>
                                        <a id='upBarNav' style={{ marginBottom: '9px', marginRight:'10px' }} href="/" target='_blank'>
                                            <img src="https://www.ascentwealth.in/Content/ascentwealth.in/UploadedImage/RealImage/71twitter5.png" alt="x" width={'25px'} height={'25px'} />
                                        </a>
                                        <a id='upBarNav' style={{ marginBottom: '9px', marginRight:'10px' }} href="https://www.instagram.com/ascent.wealth/" target='_blank' rel="noreferrer">
                                            <img src="https://www.ascentwealth.in/Content/ascentwealth.in/UploadedImage/RealImage/55instagram5.png" alt="LInkedIn" width={'25px'} height={'25px'} />
                                        </a>
                                    </div>
                                    <div className='container'>
                                        <a id='upBarNav' style={{ marginBottom: '9px', marginRight:'10px' }} href="https://www.youtube.com/channel/UC1KDPVsTcCbihC9xDcP-ZWQ/featured" target='_blank' rel="noreferrer">
                                            <img src="https://www.ascentwealth.in/Content/ascentwealth.in/UploadedImage/RealImage/118youtube5.png" alt="LInkedIn" width={'25px'} height={'25px'} />
                                        </a>

                                        <a id='upBarNav' style={{ marginBottom: '9px', marginRight:'10px' }} href="https://api.whatsapp.com/send?phone=+917305953668&text=Hello" target='_blank' rel="noreferrer">
                                            <img src="https://www.ascentwealth.in/Content/ascentwealth.in/UploadedImage/RealImage/883whatsapp5.png" alt="LInkedIn" width={'25px'} height={'25px'} />
                                        </a>

                                        <a id='upBarNav' style={{ marginBottom: '9px', marginRight:'10px' }} href="https://www.linkedin.com/in/kannan-rangaswamy-39761b8b/" target='_blank' rel="noreferrer">
                                            <img src="https://www.ascentwealth.in/Content/ascentwealth.in/UploadedImage/RealImage/211linkedin5.png" alt="LInkedIn" width={'25px'} height={'25px'} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
                <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }} >
                    © 2024 Copyright :
                    <a className="text-white" style={{ color: 'black', textDecoration: 'none' }} href="https://mdbootstrap.com/"> Ascent Wealth. All rights reserved. || Designed & Developed By : Shreyansh Tiwari</a>
                </div>
            </footer >
        </section>
    )
}

export default Footer