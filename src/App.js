import React, {Component} from 'react';
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Contact from "./components/Contact";
import Loader from 'react-loader-spinner'

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {isLoading: true}
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({isLoading: false})
        }, 3500)
    }

    render() {
        {
            if (this.state.isLoading) {
                return (
                    <div
                        className="d-flex w-100 min-vh-100 position-absolute justify-content-center align-items-center bg-light">
                        <Loader type="Grid" color="#333"
                                height={100}
                                width={100}/>
                    </div>
                )
            } else {
                return (
                    <>
                        <Router>
                            <Switch>
                                <Route path="/" exact component={Home}/>
                                <Route path="/project" component={Portfolio}/>
                                <Route path="/contact" component={Contact}/>
                            </Switch>
                            <Navbar/>
                        </Router>
                    </>
                );
            }
        }

    }
}

export default App;
