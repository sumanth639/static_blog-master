/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import '../style/navbar.css'

const Navbar = () => {
    return (
        <>
            <section style={{ boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)', backgroundColor: "white", border: "2px solid lightgray", top: '0', zIndex: '1', position:'sticky'}}>
                <div className='container'>
                    <nav className="navbar navbar-expand-lg navbar-light" id='navLogo'>
                        <a className="navbar-brand" href="/">
                            <img id='imgLogo' src='https://www.ascentwealth.in/Content/ascentwealth.in/UploadedImage/RealImage/32AscentWealth.jpg' alt="logo" />
                        </a>
                        <div className=" navbar-collapse" id="myCont">
                            <div className='container'></div>
                            <div className="form-inline my-2 my-lg-0"  >
                                <ul className="navbar-nav ml-auto" style={{ fontSize: "15px", marginBottom: "15px", paddingTop: "10px", fontWeight:"500" }}>
                                    <li className="nav-item active">
                                        <a className="nav-link" href="/">Home</a>
                                    </li>
                                    <li className="nav-item active">
                                        <a className="nav-link" target='_blank' href="https://www.ascentwealth.in/#feature-22">Planning<span className="sr-only"></span></a>
                                    </li>
                                    <li className="nav-item active">
                                        <a className="nav-link" target='_blank' href="https://www.ascentwealth.in/#title-7">Services<span className="sr-only"></span></a>
                                    </li>
                                    <li className="nav-item active">
                                        <a className="nav-link" target='_blank' href="/">Blogs<span className="sr-only"></span></a>
                                    </li>
                                    <li className="nav-item active">
                                        <a className="nav-link" target='_blank' href="https://www.ascentwealth.in/#calculator-4">Calculators<span className="sr-only"></span></a>
                                    </li>
                                    <li className="nav-item active">
                                        <a className="nav-link" target='_blank' href="https://docs.google.com/forms/d/e/1FAIpQLSfAP8TkzPlCNZsKW7_Hhvt2d0u4QO0kS-QujvASCfZumYua1g/viewform">Free&nbsp;Consultation<span className="sr-only"></span></a>
                                    </li>
                                    <li className="nav-item active">
                                        <a className="nav-link" target='_blank' href="https://docs.google.com/forms/d/e/1FAIpQLSeOhn0bpjY1lcaizRJtJBMlL4i4Sg1F1hPmM8QPYDbD3nW55g/viewform">FAQ<span className="sr-only"></span></a>
                                    </li>
                                    <li className="nav-item active">
                                        <a className="nav-link" target='_blank' href="/https://www.ascentwealth.in/#footer-6">Contact&nbsp;Us<span className="sr-only"></span></a>
                                    </li>
                                    <li className="nav-item active">
                                        <a href="https://m.assetplus.in/#!/login" target='_blank' id='btnHvn' className="nav-link"><span style={{ color: 'white', padding: '5px' }}>Login</span></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </section>
        </>
    )
}

export default Navbar
