import React, {Component} from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faDownload} from '@fortawesome/free-solid-svg-icons'
import {faGithub} from "@fortawesome/free-brands-svg-icons/faGithub";
import {faInstagram} from "@fortawesome/free-brands-svg-icons/faInstagram";
import {Animated} from "react-animated-css";

class Home extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let today = new Date();
        let birthDate = new Date("2001-11-17")
        let year = 0;
        if (today.getMonth() < birthDate.getMonth()) {
            year = 1;
        } else if (today.getMonth() === today.getMonth() && today.getDate() < birthDate.getDate()) {
            year = 1;
        }

        let age = today.getFullYear() - birthDate.getFullYear() - year;
        return (
            <>
                <div className="container d-flex justify-content-center align-items-center min-vh-100">
                    <div className="row">
                        <div className="col-md-6 pt-6 order-1 order-md-0">
                            <Animated animationIn="fadeInLeftBig" animationInDuration={2000}>
                                <div className="h5">Hi,</div>
                                <div className="h5">I`m Waisal Riyanto Saputra

                                </div>
                                <div className="h3">Junior Web Programmer</div>
                                <p className="text-justify">I'm {age} years old, I've been learning programming from
                                    vocational high
                                    school. after graduate, I follow of the training at <strong>BBPLK
                                        BEKASI</strong> as a web developer in 2 months and at <strong>ENIGMA
                                        BOOTCAMP</strong> as a
                                    full-stack software engineer in 3 months.<br/> there, I learned new things such as
                                    PHP,
                                    JAVA,
                                    JAVASCRIPT,
                                    REACTJS, REACT NATIVE, SPRING BOOT, MYSQL, NODE JS, AND EXPRESS JS.<br/>
                                    and currently, I focused learn fundamentals java, javascript, and version control
                                    git
                                    for
                                    maximizing when learning framework.
                                </p>
                                <div className="row">
                                    <div className="col-md-6 col-sm-12 d-flex align-items-center">
                                        <a download href="/cv.pdf" className="btn btn-sm mr-2 btn-dark text-light"
                                           aria-label={"Left Align"}>
                                            <FontAwesomeIcon icon={faDownload} aria-hidden={true}/> &nbsp;
                                            Download CV
                                        </a>

                                        <a target="_blank" href="https://github.com/waisal-riyan/"
                                           className="mr-2 fontIcon">
                                            <FontAwesomeIcon icon={faGithub}/>
                                        </a>
                                        <a target="_blank" className="fontIcon"
                                           href="https://www.instagram.com/waisal.r/">
                                            <FontAwesomeIcon icon={faInstagram}/>
                                        </a>
                                    </div>
                                </div>
                            </Animated>
                        </div>
                        <div className="col-md-6">
                            <Animated animationIn="zoomIn" animationInDuration={1500} isVisible={true}>
                                <img src="/images/me2.png" className="img-fluid" alt=""/>
                            </Animated>
                        </div>
                    </div>
                </div>
            </>
        )
            ;
    }
}

export default Home;
