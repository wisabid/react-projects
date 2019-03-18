import React, { Component } from 'react';
import { Redirect, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

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
                    <h1>Welcome</h1>
                    <button onClick={this.props.logout}>Log out</button>
                </>
            )
        }
    }
}
const mapStateToProps = (state) => {
    return {
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        logout : () => dispatch({type : 'logout'})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);