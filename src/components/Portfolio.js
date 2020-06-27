import React, {Component} from 'react';
import {faBook} from "@fortawesome/free-solid-svg-icons/faBook";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const data = [
    {
        img: 'images/harbor.JPG',
        title: 'HarborApp',
        technology: ['Springboot', 'React js'],
        link: 'https://github.com/mini-project-harbor'
    },
]

class Portfolio extends Component {

    render() {
        const dataLoop = data.map((value) => {
            return (
                <div className="card mb-4">
                    <img src={value.img} alt={value.title} className="card-img-top h-100"/>
                    <div className="card-text">
                        <h3>{value.title}</h3>
                        <h6>{value.technology.join(', ')}</h6>
                        <a href={value.link} className="btn btn-light btn-sm">
                            <FontAwesomeIcon icon={faBook}/> &nbsp;
                            source code</a>
                    </div>
                </div>
            )
        })

        return (
            <div className="container pb-5">
                <div className="row">
                    <div className="col-12">
                        <div className="h2 project-title pt-4 mb-3 pb-3">My Projects</div>
                        {dataLoop}
                    </div>
                </div>
            </div>
        );
    }
}

export default Portfolio;
