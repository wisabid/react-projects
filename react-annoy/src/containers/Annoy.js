import { connect } from 'react-redux';
import AnnoyComp from '../components/Annoy'

const mapStateToProps = (state) => {
    return {
        annoys : state.rLogin.annoys,
        typingusers: state.rLogin.typingusers
    }
}

const mapDispatchToProps = (dispatch) => {
    return {

    }
}

const Annoy = connect(mapStateToProps, mapDispatchToProps)(AnnoyComp);
export default Annoy;