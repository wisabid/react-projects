import React, { Component } from 'react';
import { Redirect, NavLink } from 'react-router-dom';

class Home extends Component {
    constructor() {
        super();
        this.state = {
            loggedin : false
        }
    }

    componentWillMount() {
        debugger;
        if (this.props.loggedin) {
            this.setState({
                loggedin : true
            })
        }
    }
    render() {
        if (!this.state.loggedin) {
            return (
                <Redirect to="/" />
            )
        }
        else {
            return (
                <>
                    <h1>Welcome</h1>
                    <NavLink to="/register" >logout </NavLink>
                </>
            )
        }
    }
}

export default Home;