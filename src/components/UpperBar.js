/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import '../style/upperbar.css'

const UpperBar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg" style={{ backgroundColor: 'rgb(138, 114, 8)', height: '50px' }} id='upBar'>
                <div className='container' style={{ marginTop: '10px' }}>
                    <div className="container-fluid">
                        <div className="collapse navbar-collapse" id="navbarText">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <a style={{ marginBottom: '9px' }} href="https://www.facebook.com/ascentwealth.mf" target='_blank' id='upBarNav'>
                                    <img src="https://www.ascentwealth.in/Content/ascentwealth.in/UploadedImage/RealImage/461facebook5.png" style={{ marginLeft: '50px', marginRight: '10px' }} alt="Facebook" width={'25px'} height={'25px'} />
                                </a>
                                <a id='upBarNav' style={{ marginBottom: '9px' }} href="/" target='_blank'>
                                    <img src="https://www.ascentwealth.in/Content/ascentwealth.in/UploadedImage/RealImage/71twitter5.png" style={{ marginRight: '10px' }} alt="x" width={'25px'} height={'25px'} />
                                </a>
                                <a id='upBarNav' style={{ marginBottom: '9px' }} href="https://www.instagram.com/ascent.wealth/" target='_blank'>
                                    <img src="https://www.ascentwealth.in/Content/ascentwealth.in/UploadedImage/RealImage/55instagram5.png" style={{ marginRight: '10px' }} alt="LInkedIn" width={'25px'} height={'25px'} />
                                </a>
                                <a id='upBarNav' style={{ marginBottom: '9px' }} href="https://www.youtube.com/channel/UC1KDPVsTcCbihC9xDcP-ZWQ/featured" target='_blank'>
                                    <img src="https://www.ascentwealth.in/Content/ascentwealth.in/UploadedImage/RealImage/118youtube5.png" style={{ marginRight: '10px' }} alt="LInkedIn" width={'25px'} height={'25px'} />
                                </a>
                                <a id='upBarNav' style={{ marginBottom: '9px' }} href="https://api.whatsapp.com/send?phone=+917305953668&text=Hello" target='_blank'>
                                    <img src="https://www.ascentwealth.in/Content/ascentwealth.in/UploadedImage/RealImage/883whatsapp5.png" style={{ marginRight: '10px' }} alt="LInkedIn" width={'25px'} height={'25px'} />
                                </a>
                                <a id='upBarNav' style={{ marginBottom: '9px' }} href="https://www.linkedin.com/in/kannan-rangaswamy-39761b8b/" target='_blank'>
                                    <img src="https://www.ascentwealth.in/Content/ascentwealth.in/UploadedImage/RealImage/211linkedin5.png" style={{ marginRight: '10px' }} alt="LInkedIn" width={'25px'} height={'25px'} />
                                </a>
                            </ul>
                            <span className="navbar-text" style={{ display: 'flex', color:'white' }}>
                                <img style={{ marginLeft: "10px" }} src="https://www.ascentwealth.in/Content/ascentwealth.in/UploadedImage/RealImage/46955615telephone1.png" alt="Phone" width={'25px'} height={'25px'} />
                                <p style={{ marginLeft: "10px", fontSize: '15px', fontWeight: "600", marginTop:'3px ' }}>+91-7305953668</p>
                                <img src="https://www.ascentwealth.in/Content/ascentwealth.in/UploadedImage/RealImage/704694287mail2.png" alt="Mail" width={'25px'} height={'25px'} style={{marginLeft:'20px'}} />
                                <a href="mailto:ascentwealth.invest@gmail.com" style={{ color: 'black', textDecoration: 'none' }}>
                                    <p style={{ marginLeft: "10px", fontSize: '15px', fontWeight: "600", color:'white', marginTop:'3px  ' }}>ascentwealth.invest@gmail.com</p>
                                </a>
                            </span>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default UpperBar
