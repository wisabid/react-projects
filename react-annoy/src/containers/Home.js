import { connect } from 'react-redux';
import HomeComp from '../components/Home'

const mapStateToProps = (state) => {
    return {
        messages : state.rLogin.messages,
        users : state.rLogin.users
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addUser : (user) => dispatch({type:'NEW_USER', user}),
        sendmessage : (e) => dispatch({type : 'NEW_MESSAGE', payload : { message : e}}),
        userExit : (user) => dispatch({type : 'USER_EXIT', user})
    }
}

const Home = connect(mapStateToProps, mapDispatchToProps)(HomeComp)

export default Home;