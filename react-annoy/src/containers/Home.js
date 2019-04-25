import { connect } from 'react-redux';
import HomeComp from '../components/Home'

const mapStateToProps = (state) => {
    return {
        loggedin : state.rLogin.loggedin,
        loading : state.rLogin.loading,
        messages : state.rLogin.messages
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        focusme : (event) => dispatch({type : 'focus', id : event.target.id}),
        blurme : () => dispatch({type : 'blur'}),
        sendmessage : (e) => dispatch({type : 'NEW_MESSAGE', payload : { message : e}})
    }
}

const Home = connect(mapStateToProps, mapDispatchToProps)(HomeComp)

export default Home;