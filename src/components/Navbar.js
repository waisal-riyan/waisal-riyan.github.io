import React, {Component} from 'react';
import {Link, NavLink} from "react-router-dom";

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {active: ''}

    }

    doClickToggler() {
        if (this.state.active === 'active') {
            this.setState({active: ''});
        } else {
            this.setState({active: 'active'});
        }
    }

    render() {
        return (
            <>
                <nav className="navbar fixed-bottom navbar-expand-lg navbar-light bg-light">
                    <div className="container">
                        <button className={`navbar-toggler ${this.state.active}`} onClick={() => this.doClickToggler()}
                                type="button" data-toggle="collapse"
                                data-target="#navbarSupportedContent"
                                aria-controls="navbarSupportedContent" aria-expanded="false"
                                aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"/>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item">
                                    <NavLink exact activeClassName="active-link" className="nav-link" title="Home"
                                             to="/">Home</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink activeClassName="active-link" className="nav-link"
                                             title="portfolio"
                                             to='/project'>Project</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink activeClassName="active-link" to='/contact' className="nav-link">contact
                                        me</NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </>
        );
    }
}

export default Navbar;
