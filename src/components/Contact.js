import React, {Component} from 'react';
import {faEnvelope, faPhoneAlt} from '@fortawesome/free-solid-svg-icons'
import {faWhatsapp} from '@fortawesome/free-brands-svg-icons'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

class Contact extends Component {
    render() {
        return (
            <div className="container d-flex pt-5 justify-content-center align-items-lg-start">
                <div className="row text-center">
                    <div className="col-12 mb-5">
                        <h2 className="text-center">
                            Let's get in touch!
                        </h2>
                        <div className="row">
                            <div className="col-4 offset-4">
                                <div className="border-bottom border-dark"></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-lg-6">
                        <a href="tel:0858-9346-7032">
                            <div
                                className="btn btn-outline-dark h5 d-flex flex-row justify-content-center align-items-center rounded-pill  p-3"
                            >
                                <FontAwesomeIcon icon={faPhoneAlt}/>
                                &nbsp;
                                0858-9346-7032
                            </div>
                        </a>
                    </div>
                    <div className="col-sm-12 col-lg-6 col-md-12">
                        <a href="mailto:waisal.riyan@gmail.com">
                            <div
                                className="btn btn-outline-dark h5 d-flex flex-row justify-content-center align-items-center rounded-pill p-3"
                            >
                                <FontAwesomeIcon icon={faEnvelope}/>&nbsp; waisal.riyan@gmail.com
                            </div>
                        </a>
                    </div>
                    <div className="col-sm-12 offset-lg-3 col-lg-6 mt-lg-2">
                        <a target="_blank" href="https://api.whatsapp.com/send?phone=6281283715745">
                            <div
                                className="btn btn-outline-dark h5 d-flex flex-row justify-content-center align-items-center rounded-pill p-3">
                                <FontAwesomeIcon icon={faWhatsapp}/>
                                &nbsp;
                                0812-8371-5745
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;
