import React, { Component } from 'react';
import { Redirect, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import Logout from './Logout';
import Login from './Login';

class Home extends Component {
    constructor() {
        super();        
    }

    componentWillMount() {
        
    }
    render() {
        if (!this.props.loggedin) {
            return (
                <Redirect to="/" />
            )
        }
        else {
            return (
                <>
                    <Logout logout={this.props.logout}/>
                    <h1>Welcome</h1>
                </>
            )
        }
    }
}
const mapStateToProps = (state) => {
    return {
        loggedin : state.rLogin.loggedin
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        logout : () => dispatch({type : 'logout'})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);