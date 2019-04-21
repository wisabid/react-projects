import { connect } from 'react-redux';
import LoginComp from '../components/Login'

const mapStateToProps = (state) => {
    return {
        loggedin : state.rLogin.loggedin,
        pass : state.rLogin.pass,
        focus : state.rLogin.focus,
        loading : state.rLogin.loading
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        // onNext : (id) => dispatch(actionCreator.showpass(id)), //this is using redux-thunk
        onNext: (id) => dispatch({type : 'showpass', id : id}),
        cancel : () => dispatch({type : 'cancel'}),
        onLogin : () => dispatch({type : 'login'}),
        focusme : (event) => dispatch({type : 'focus', id : event.target.id}),
        blurme : () => dispatch({type : 'blur'}),
    }
}

const Login = connect(mapStateToProps, mapDispatchToProps)(LoginComp)

export default Login;