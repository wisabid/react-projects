import { connect } from 'react-redux';
import MessageBoxComp from '../components/Chat/MessageBox';

const mapStateToProps = (state) => {
    return {

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        sendMessage : (payload) => dispatch({type: 'NEW_MESSAGE', payload : payload })
    }
}

const MessageBox = connect(mapStateToProps, mapDispatchToProps)(MessageBoxComp);

export default MessageBox;